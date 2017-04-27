/**
 * Created by diogo on 25/04/17.
 */
import {Application, Request, Response} from 'express';
import {Rota} from "./irota";
import {ProdutoController} from "../controllers/produto";

export class ProdutoRota implements Rota{

    private _controller;

    configurarRotas(app: Application) {
        this._controller = new ProdutoController(app);
        this._getForm(app);
        this._produtos(app);
        this._produtosId(app);
        this._getFormId(app);
    }

    private _produtos(app: Application){
        app.route("/produtos")
            .get(this._controller.lista.bind(this._controller))
            .post(this._controller.adiciona.bind(this._controller));
    }

    private _produtosId(app: Application){
        app.route("/produtos/:id")
            .delete(this._controller.remove.bind(this._controller))
            .put(this._controller.altera.bind(this._controller));
    }

    private _getForm(app: Application){
        app.get("/produtos/form", this._controller.obterCadastro.bind(this._controller))
    }

    private _getFormId(app: Application){
        app.get("/produtos/form/:id", this._controller.buscaPorId());
    }

}