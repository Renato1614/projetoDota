const mongoose = require('mongoose');

require('./User');

const url = "mongodb://Renato1614:Re46753951@ds133388.mlab.com:33388/projetodota";
mongoose.connect(url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    console.log("Conectado!");

});