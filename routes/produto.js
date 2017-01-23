
module.exports = function(app){

	app.get("/produtos", function(req, res){
		res.render("produto/lista");
	});

};