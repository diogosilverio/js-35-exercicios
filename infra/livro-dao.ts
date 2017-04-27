/**
 * Created by diogo on 25/04/17.
 */

import {GenericDAO} from './dao';
import {Livro} from "../model/livro";

export class LivroDAO extends GenericDAO {

    constructor(connection){
        super(connection)
    }

    lista(): Promise<any>{
       return this.dql("select * from livros;", null);
    }

    adiciona(livro: Livro): Promise<any>{
        return this.dml("insert into livros set ?", livro);
    }

    remove(id: number): Promise<any> {
        return this.dml("delete from livros where id =?", [id]);
    }

    buscaPorId(id: number): Promise<any> {
        return this.dql("select * from livros where id = ?", [id], true);
    }

    altera(livro: Livro): Promise<any> {
        return this.dml("update livros set ? where id = ?", [livro, livro.id]);
    }

}