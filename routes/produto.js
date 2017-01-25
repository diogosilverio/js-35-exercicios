const LivroDAO = require("../infra/LivroDAO");

module.exports = (app) => {
	app.route("/produtos")
	.get((req, res) => {

		const dao = new LivroDAO(req.connection);
		
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
		const livro = req.body;
		console.log("Produto recebido: " + livro);
		const dao = new LivroDAO(req.connection);

		dao.adiciona(livro)
			.then(
					() => res.render("produto/form", {status: "Incluido com sucesso"}),
						(err) => res.render("produto/form", {status: err})
				);
	});

	app.get("/produtos/form", (req, res) => res.render("produto/form"));
}