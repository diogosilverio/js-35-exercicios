var express = require("express");
var app = express();

// module.exports = function(){
	app.set("view engine", "ejs");

	require("./routes/produto.js")(app);
	require("./routes/cliente.js")(app);

	module.exports = app;
// };