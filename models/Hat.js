const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hatSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    // frontImgSrc: { type: String, required: true },
    images: { type: Array },
    price: { type: Number, required: true },
    sizes: { type: Array },
    amount: { type: Number, required: true }
})

module.exports = mongoose.model('Hat', hatSchema);