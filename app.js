require('dotenv').config()

const express = require('express');
const app = express();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// Collection for storing cartSessions
const cartSessionStore = new MongoDBStore({
    uri: 'mongodb://localhost:27017/ebay',
    databaseName: 'ebay',
    collection: 'cartSessions',
});
// Catch errors
cartSessionStore.on('error', function (error) {
    assert.ifError(error);
    assert.ok(false);
});
// Initialize 
app.use(session({
    secret: process.env.CART_SESSION_SECRET,
    resave: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 1 * 1,
    },
    saveUninitialized: true,
    store: cartSessionStore,
    unset: 'destroy',
    name: 'cart.session'
}));

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