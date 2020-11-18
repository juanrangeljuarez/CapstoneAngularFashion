const Product = require('../models/product.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
    product: { type: Schema.Types.ObjectId, ref: 'product' },
    quantity: Number
});

module.exports = mongoose.model('product', ProductSchema);