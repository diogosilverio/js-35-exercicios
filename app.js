var express = require("express");

var app = express();
app.set("view engine", "ejs");

app.get("/produtos", function(req, res){
	res.render("produto/lista");
});

app.listen(3000, function(){
	console.log("Servidor de pe!");
})