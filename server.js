const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const handlebars = require('express-handlebars');
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view_engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

//Express server listener > > 
app.listen(PORT, function () {
    console.log(`Application listening on port ${PORT}`);
});