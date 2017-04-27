"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProdutoController = require("../controllers/ProdutoController");
class ProdutoRota {
    configurarRotas(app) {
        this._controller = new ProdutoController(app);
        this._getForm(app);
        this._produtos(app);
        this._produtosId(app);
        this._getFormId(app);
    }
    _produtos(app) {
        app.route("/produtos")
            .get(this._controller.lista.bind(this._controller))
            .post(this._controller.adiciona.bind(this._controller));
    }
    _produtosId(app) {
        app.route("/produtos/:id")
            .delete(this._controller.remove.bind(this._controller))
            .put(this._controller.altera.bind(this._controller));
    }
    _getForm(app) {
        app.get("/produtos/form", this._controller.obterCadastro.bind(this._controller));
    }
    _getFormId(app) {
        app.get("/produtos/form/:id", this._controller.buscaPorId());
    }
}
exports.ProdutoRota = ProdutoRota;
