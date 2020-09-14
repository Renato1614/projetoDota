var express = require('express');
var mongoose = require('mongoose');
const User = mongoose.model('User');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Projetinho do dota' });
});

router.get('/register', function (req, res, next) {
  res.render('register');
});

router.post('/register', async (req, res) => {
  let body = req.body;
  console.log(req.body);
  CriarUsuario(body);
  res.render('register');
})

async function CriarUsuario(body) {
  try {
    let usuario = {
      username: body.username,
      password:body.senha,
      email:body.email
    }
    let user = await new User(usuario);
    console.log('usuario criado!');
    await user.save();
  } catch (error) {
    throw error;
  }
}
module.exports = router;
