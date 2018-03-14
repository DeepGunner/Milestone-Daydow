require('dotenv').config()

const express = require('express');
const app = express();

app.set('json spaces', 10);

// Import routes
var productRoutes = require('./routes/productRoutes');

// Append routes to '/api'
app.use('/api', productRoutes);

app.get('/api', function (req, res) {
    res.json({
        message: "Hey, we set! Testing again!"
    })
})

app.listen('8000', () => {
    console.log('Up an running!')
})