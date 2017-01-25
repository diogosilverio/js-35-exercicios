const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const connectionMiddleware = require("./infra/connection-middleware");


app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());

app.use(connectionMiddleware);

require("./routes/produto.js")(app);
require("./routes/cliente.js")(app);

module.exports = app;