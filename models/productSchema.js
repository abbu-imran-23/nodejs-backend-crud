const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
       title: {
        type: String,
        required: true,
       },
       description: {
        type: String,
        required: true,
       },
       price: {
        type: Number,
        required: true,
       },
       quantity: {
        type: Number,
        required: true,
        default: 1
       }
    }
)

module.exports = mongoose.model("productSchema", productSchema);