//init express
const express = require('express');
const app = express();

//sequelize models
const db = require('./models')

//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//top layer
app.use(express.static('public'));

//routes
const routeHandling = require('./controllers/route_controller.js');
app.use(routeHandling);

//handlebars
const handlebars = require('express-handlebars');
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Express server listener 
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Application listening on port ${PORT}`);
});