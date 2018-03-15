require('dotenv').config()

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;

var mongoDB = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@ds113849.mlab.com:13849/ebayclone";
mongoose.connect(mongoDB)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var bodyParser = require('body-parser');
var Comment = require('./model/comments');

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function (req, res) {
  res.json({ message: 'API Initialized!' });
});

//adding the /comments route to our /api router
router.route('/comments')
  //retrieve all comments from the database
  .get(async function (req, res) {
    // /api/comments?page=1&count=20
    var products;

    var page = Math.max(parseInt(req.query.page) - 1, 0) || 0;
    var count = Math.max(parseInt(req.query.count), 10) || 20;
    // The default limit is assumed at 20 entries per page
    //looks at our Comment Schema
    products = await Comment.find({})
        .skip(parseInt(page) * parseInt(count))
        .limit(parseInt(count))
    
    return res.json(products);

    // Comment.find(function (err, comments) {
    //   if (err)
    //     res.send(err);
    //   //responds with a json object of our database comments.
    //   res.json(comments)
    // });
  })


//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function () {
  console.log(`api running on port ${port}`);
});

