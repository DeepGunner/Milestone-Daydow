require('dotenv').config()

const express = require('express');
const app = express();

app.set('json spaces', 10);

// Middlewares
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    // Uncomment the below line to prevent caching
    // res.setHeader('Cache-Control', 'no-cache');
    next();
});

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