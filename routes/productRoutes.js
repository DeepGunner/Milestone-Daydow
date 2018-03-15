const express = require('express');
const router = express.Router();
const db = require('../models');

// Helper function
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// All products
router.get('/product', async function (req, res) {
    // This route doesn't handle errors well, when
    // page or count values are enormously high or negative
    // Need to add Unhandled Promise rejections for the async/await combo
    var products;

    var page = Math.max(parseInt(req.query.page) - 1, 0) || 0;
    var count = Math.max(parseInt(req.query.count), 10) || 20;
    // The default limit is assumed at 20 entries per page
    products = await db.Product.find({})
        .skip(parseInt(page) * parseInt(count))
        .limit(parseInt(count))
    return res.json(products);
})

// For a single product
router.get('/product/:sku', async function (req, res) {
    var product = await db.Product.find({
        sku: req.params.sku
    })
    return res.json(product);
})

module.exports = router;