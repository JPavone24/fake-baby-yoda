const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MerchSchema = new Schema(
    {
        nameOfProduct: {type: String},
        nameOfSeller: {  type: String},
        price: {  type: String},
        department: {  type: String},
        quantity: {  type: Number },
        img: {  type: String, required: true},
        description: {  type: String},
    }
)

const Merch = mongoose.model('Merch', MerchSchema)

module.exports = Merch