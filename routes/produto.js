const connectionFactory = require("../infra/connection-factory")
const ProdutoDAO = require("../infra/ProdutoDAO");

module.exports = (app) => {
	app.get("/produtos", (req, res) => {

		let connection = connectionFactory();
		let dao = new ProdutoDAO(connection);
		
		dao.lista((err, result) => { //Callback error first*
			if(err){
				return console.log(err);
			}

			res.render("produto/lista", {lista: result});
		});

	});

	app.get("/produtos/:id", (req, res) => res.render("produto/lista"));
}