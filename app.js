const express = require('express');
const app = express();

app.get('/api', function (req, res) {
    res.json({
        message: "Hey, we set!"
    })
})

app.listen('8000', () => {
    console.log('Up an running!')
})