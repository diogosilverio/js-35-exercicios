/**
 * Created by diogo on 26/04/17.
 */

export class Livro {
    private _id: number;
    private _titulo: string;
    private _descricao: string;
    private _preco: number;

    // TODO Validar
    constructor(id: number, titulo: string, descricao: string, preco: number){
        this._id = id;
        this._titulo = titulo;
        this._descricao = descricao;
        this._preco = preco;
    }

    get preco(): number {
        return this._preco;
    }
    get descricao(): string {
        return this._descricao;
    }
    get titulo(): string {
        return this._titulo;
    }
    get id(): number {
        return this._id;
    }

}