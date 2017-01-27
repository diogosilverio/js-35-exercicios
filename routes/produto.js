const LivroDAO = require("../infra/LivroDAO");

module.exports = (app) => {
	app.route("/produtos")
	.get((req, res) => {

		const dao = new LivroDAO(req.connection);

		dao.lista()
			.then(
				livros => {
					res.format({
						html: () => res.render("produto/lista", {lista: livros}),
						json: () => res.json({lista: livros})
					})
				},
				err => {
					console.log("Erro ocorreu: " + err.message);
					res.sendStatus(500);
				}
			);

	})
	.post((req, res) => {
		const livro = req.body;
		
		req.assert("titulo", "Titulo obrigatorio").notEmpty();
		req.assert("preco", "Preco deve ser um numero").isFloat();

		const erros = req.validationErrors();

		if(erros){
			res.render("produto/form", {erros, livro: {}});
			return;
		}

		const dao = new LivroDAO(req.connection);
		dao.adiciona(livro)
			.then(
					() => {
						app.get("io").emit("novoLivro", livro);
						res.redirect("/produtos");
					},
					(err) => res.render("produto/form", {status: err, livro: {}})
				);
	});

	app.get("/produtos/form", (req, res) => {
		const livro = {};
		res.render("produto/form", {livro});
	});

	app.get("/produtos/form/:id", (req, res) => {

		const id = req.params.id;
		const dao = new LivroDAO(req.connection);

		dao.buscaPorId(id)
			.then(
				(livro) => res.render("produto/form", {livro}),
				(err) => res.status(500).end(err)
			);

		
	});

	app.route("/produtos/:id")
	.delete((req, res) => {
		const id = req.params.id;
		const dao = new LivroDAO(req.connection);

		console.log("Apagando livro id: " + id);

		dao.remove(id)
			.then(
					() => res.redirect("/produtos"),
					(err) => res.status(500).send(err)
				);
	})
	.put((req, res) => {
		const id = req.params.id;
		const livro = req.body;

		const dao = new LivroDAO(req.connection);

		dao.altera(id, livro)
			.then(
				() => res.redirect("/produtos"),
				(err) => res.sendStatus(500)
			);
	});
}