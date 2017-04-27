import {Application} from "express";
import {LivroDAO} from "../infra/livro-dao";
const co = require("co");

export class ProdutoController {
	private _app: Application;

	constructor(app: Application){
		this._app = app;
	}

	public lista(req, res){
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
	}

	public adiciona(req, res){
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
						this._app.get("io").emit("novoLivro", livro);
						res.redirect("/produtos");
					},
					(err) => res.render("produto/form", {status: err, livro: {}})
				);
	}

	public buscaPorId(){

		return co.wrap(function *(req, res){
			const id = req.params.id;
			const dao = new LivroDAO(req.connection);

			try{
				const livro = yield dao.buscaPorId(id);
				res.render("produto/form", {livro});
			} catch(err) {
				res.status(500).end(err);
			}
		
		});
	}

	public remove(req, res){
		const id = req.params.id;
		const dao = new LivroDAO(req.connection);

		console.log("Apagando livro id: " + id);

		dao.remove(id)
			.then(
					() => res.redirect("/produtos"),
					(err) => res.status(500).send(err)
				);
	}

	altera(req, res){

		const id = req.params.id;
		const livro = req.body;

		const dao = new LivroDAO(req.connection);

		dao.altera(livro)
			.then(
				() => res.redirect("/produtos"),
				(err) => res.sendStatus(500)
			);
	}

	public obterCadastro(req, res){
		const livro = {};
		res.render("produto/form", {livro});
	}

}