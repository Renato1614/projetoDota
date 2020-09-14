var express = require('express');
var mongoose = require('mongoose');
const AUTH = require('../AUTH');
const User = mongoose.model('User');
require('../AUTH/index')
var router = express.Router();

/* GET home page. */
router.get('/', AUTH,function (req, res, next) {
  res.render('index', { title: 'Projetinho do dota' });
});
router.get('/login', function(req,res){
  res.render('login')
})
router.post('/login', async function (req, res) {
  let user = await User.find({ username: req.body.username });
  if (user.length > 0) {
    res.render('profile', { title: 'profile' })
    req.session.logged = true
    //salva o usuario na sessao 
    req.session.user = user
    //salva a sessão
    req.session.save()
    //redireciona para o index
    res.redirect('/users/profile')
  } else {
    res.render('login', { message: "Usuario não encontrado", title: 'login' })
  }
})

router.get('/register', function (req, res, next) {
  res.render('register');
});

router.post('/register', async (req, res) => {
  let body = req.body;
  console.log(req.body);
  CriarUsuario(body);
  res.render('index', {title: 'projeto dota'});
})

async function CriarUsuario(body) {
  try {
    let usuario = {
      username: body.username,
      password: body.senha,
      email: body.email
    }
    let user = await new User(usuario);
    console.log('usuario criado!');
    await user.save();
  } catch (error) {
    throw error;
  }
}
module.exports = router;
