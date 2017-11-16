var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var favicon = require('serve-favicon');

// bring in the models
var db = require("./models");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/spells_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.use(favicon(path.join(__dirname, 'public', '/assets/images/favicon.ico')));

// listen on port 3000
var port = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(port);
});


console.log(module.exports);
