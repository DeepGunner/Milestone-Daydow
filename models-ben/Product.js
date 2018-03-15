const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    sku: {
        type: String,
        required: [true, "Product ID can't be blank"],
        index: true
    },
    name: {
        type: String,
        required: [true, "Product name can't be blank"],
    },
    product: {
        type: String,
        required: [true, "...can't be blank"],
    },
    color: { type: String },
    category: {
        type: String,
        required: [true, "Product category can't be blank"],
    },
    // productCategory: {
    //     type: String,
    //     required: [true, "Product category can't be blank"],
    // },
    inStock: {type: Boolean},
    stock: {type: Number},
    sold: {type: Number},
    price: {
        type: Number,
        required: [true, "Product price can't be blank"],
    },
    merchant: {
        type: String,
        required: [true, "A product must be associated with one merchant"],
    },
    company: {
        type: String,
        required: [true, "A product must be associated with one company"],
    },
    preview: {
        small: { type: String },
        medium: { type: String }
    },
}, {timestamps: true});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;