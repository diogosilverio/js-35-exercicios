const connectionFactory = require("../infra/connection-factory")
const ProdutoDAO = require("../infra/ProdutoDAO");

module.exports = (app) => {
	app.get("/produtos", (req, res) => {

		let connection = connectionFactory();
		let dao = new ProdutoDAO(connection);
		
		dao.lista()
			.then(
				livros => res.render("produto/lista", {lista: livros}),
				err => console.log(err)
			);

	});

	app.get("/produtos/:id", (req, res) => res.render("produto/lista"));
}