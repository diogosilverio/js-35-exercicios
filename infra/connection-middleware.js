/**
 * Created by diogo on 25/04/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_factory_1 = require("./connection-factory");
function default_1(req, res, next) {
    console.log("Abrindo conexao...");
    req.connection = new connection_factory_1.ConnectionFactory().connection();
    next();
    req.connection.end(() => console.log("Conexao fechada."));
}
exports.default = default_1;
