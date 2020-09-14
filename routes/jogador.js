var express = require('express');
var mongoose = require('mongoose');
const AUTH = require('../AUTH');
const User = mongoose.model('User');
require('../AUTH/index')
var router = express.Router();


module.exports = router;
