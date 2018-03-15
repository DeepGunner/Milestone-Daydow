const express = require('express');
const router = express.Router();
const db = require('../models');

// All products
router.get('/product', async function (req, res) {
    var products = await db.Product.find({}).limit(20);
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