const express = require("express");
const app = express();

// module.exports = function(){
	app.set("view engine", "ejs");

	app.use(express.static("public"));

	require("./routes/produto.js")(app);
	require("./routes/cliente.js")(app);

	module.exports = app;
// };