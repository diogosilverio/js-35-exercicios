import {Application} from "express";
import {LivroDAO} from "../infra/livro-dao";

export class ProdutoController {
	private _app: Application;

	constructor(app: Application){
		this._app = app;
	}

	public async lista(req, res){
		const dao = new LivroDAO(req.connection);

		try{
			const livros = await dao.lista();
			res.format({
				html: () => res.render("produto/lista", {lista: livros}),
				json: () => res.json({lista: livros})
			});
		} catch(e){
			console.log(`Erro ocorreu: e.message`);
			res.sendStatus(500);
		}

	}

	public async adiciona(req, res){
		const livro = req.body;
		
		req.assert("titulo", "Titulo obrigatorio").notEmpty();
		req.assert("preco", "Preco deve ser um numero").isFloat();

		const erros = req.validationErrors();

		if(erros){
			res.render("produto/form", {erros, livro: {}});
			return;
		}

		const dao = new LivroDAO(req.connection);

		try{
			await dao.adiciona(livro);
			this._app.get("io").emit("novoLivro", livro);
			res.redirect("/produtos");
		} catch(e){
			console.log(`Erro ocorreu: ${e.message}`);
			res.render("produto/form", {status: e, livro: {}});
		}

	}

	public async buscaPorId(req, res){

		const id = req.params.id;
		const dao = new LivroDAO(req.connection);

		try{
			const livro = await dao.buscaPorId(id);
			res.render("produto/form", {livro});
		} catch(e) {
			res.status(500).end(e);
		}

	}

	public async remove(req, res){
		const id = req.params.id;
		const dao = new LivroDAO(req.connection);

		console.log("Apagando livro id: " + id);

		try{
			await dao.remove(id);
			res.redirect("/produtos");
		} catch(e){
			res.status(500).send(e);
		}

	}

	public async altera(req, res){

		const livro = req.body;
		livro.id = req.params.id;

		const dao = new LivroDAO(req.connection);

		try{
			await dao.altera(livro);
			res.redirect("/produtos");
		} catch(e){
			res.sendStatus(500);
		}

	}

	public obterCadastro(req, res){
		const livro = {};
		res.render("produto/form", {livro});
	}

}