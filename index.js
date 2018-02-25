var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 8080;

//Express server listener > > 
app.listen(PORT, function (){
    console.log(`Application listening on port ${PORT}`);
})