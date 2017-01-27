const ProdutoController = require("../controllers/ProdutoController");

module.exports = (app) => {

	const controller = new ProdutoController(app);

	app.route("/produtos")
		.get(controller.lista.bind(controller))
		.post(controller.adiciona.bind(controller));

	app.get("/produtos/form", controller.obterCadastro.bind(controller));

	app.get("/produtos/form/:id", controller.buscaPorId());

	app.route("/produtos/:id")
		.delete(controller.remove.bind(controller))
		.put(controller.altera.bind(controller));
}