const express = require("express");
const app = express();
const connectionMiddleware = require("./infra/connection-middleware");

const bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(connectionMiddleware);

require("./routes/produto.js")(app);
require("./routes/cliente.js")(app);

module.exports = app;