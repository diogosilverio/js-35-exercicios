const connectionFactory = require("../infra/connection-factory")
const ProdutoDAO = require("../infra/ProdutoDAO");

module.exports = (app) => {
	app.route("/produtos")
	.get((req, res) => {

		let connection = connectionFactory();
		let dao = new ProdutoDAO(connection);
		
		dao.lista()
			.then(
				livros => res.render("produto/lista", {lista: livros}),
				err => {
					console.log("Erro ocorreu: " + err.message);
					res.sendStatus(500);
				}
			);

	})
	.post((req, res) => {
		console.log(req.body);
		res.sendStatus(201);
	});

	app.get("/produtos/form", (req, res) => res.render("produto/form"));
}