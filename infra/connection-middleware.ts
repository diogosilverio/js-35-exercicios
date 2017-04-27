/**
 * Created by diogo on 25/04/17.
 */

import {ConnectionFactory} from "./connection-factory";

export default function (req, res, next) {
    console.log("Abrindo conexao...");
    req.connection = new ConnectionFactory().connection();
    next();
    req.connection.end(() => console.log("Conexao fechada."))
}