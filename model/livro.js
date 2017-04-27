/**
 * Created by diogo on 26/04/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    // TODO Validar
    constructor(id, titulo, descricao, preco) {
        this._id = id;
        this._titulo = titulo;
        this._descricao = descricao;
        this._preco = preco;
    }
    get preco() {
        return this._preco;
    }
    get descricao() {
        return this._descricao;
    }
    get titulo() {
        return this._titulo;
    }
    get id() {
        return this._id;
    }
}
exports.Livro = Livro;
