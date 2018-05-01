var express = require("express");
var bodyParser = require("body-parser");

//using methodOverride to send POST request
var methodOverride = require('method-override');
var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

//using methodOverride to send POST request
//http://philipm.at/2017/method-override_in_expressjs.html
app.use(methodOverride('_method'));


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//starting our servers
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
