const User = require('./User.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const CheckoutSchema = mongoose.Schema({
    total: Number,
    username: String
});

module.exports = mongoose.model('chekout', CheckoutSchema);