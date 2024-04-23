const mongoose = require('mongoose');

const Forms = new mongoose.Schema({
    name: String,
    email: String,
   message:String
});

module.exports = mongoose.model('form', forms);