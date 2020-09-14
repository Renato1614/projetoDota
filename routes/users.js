var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const User = mongoose.model('User');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile',async (req,res)=>{
  let userId = req.session.user[0]._id;
  let user = await User.findById(userId);
  res.render('profile',{title: 'pŕofile', user:user});
})
module.exports = router;
