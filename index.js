var express = require('express');
// var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 5000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})

//Express server listener > > 
app.listen(PORT, function () {
    console.log(`Application listening on port ${PORT}`);
});