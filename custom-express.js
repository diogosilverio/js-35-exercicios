const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// module.exports = function(){
	app.set("view engine", "ejs");

	app.use(express.static("public"));
	app.use(bodyParser.urlencoded({extended: true}));

	require("./routes/produto.js")(app);
	require("./routes/cliente.js")(app);

	module.exports = app;
// };