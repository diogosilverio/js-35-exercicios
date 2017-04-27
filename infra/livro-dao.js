/**
 * Created by diogo on 25/04/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dao_1 = require("./dao");
class LivroDao extends dao_1.GenericDAO {
    constructor(connection) {
        super(connection);
    }
    lista() {
        return this.dql("select * from livros;", null);
    }
    adiciona(livro) {
        return this.dml("insert into livros set ?", livro);
    }
    remove(id) {
        return this.dml("delete from livros where id =?", [id]);
    }
    buscaPorId(id) {
        return this.dml("select * from livros where id = ?", [id]);
    }
    altera(livro) {
        return this.dml("update livros set ? where id = ?", [livro, livro.id]);
    }
}
exports.LivroDao = LivroDao;
