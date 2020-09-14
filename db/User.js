const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const md5 = require('md5');
const autopopulate = require('mongoose-autopopulate');

const User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

User.methods.checkPassword = function (password) {
    return (this.password === md5(password))
  }
  //antes de salvar encripta a senha no modelo md5 
  User.pre('save', function (next) {
    this.password = md5(this.password)
    next()
  })
  
  User.plugin(autopopulate)
  module.exports = mongoose.model('User', User)