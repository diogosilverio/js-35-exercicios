const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const methodOverride = require("method-override");

const connectionMiddleware = require("./infra/connection-middleware");


app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());

app.use(connectionMiddleware);

require("./routes/produto.js")(app);
require("./routes/cliente.js")(app);
require("./routes/principal.js")(app);

app.use("*", (req, res, next) =>{
	res.status(400).render("errors/400");
});

module.exports = app;