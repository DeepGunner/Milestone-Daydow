const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/product', async function (req, res) {
    var products = await db.Product.find({}).limit(20);
    return res.json(products);
})

// router.get('/product/:id', function (req, res) {
    
// })

module.exports = router;