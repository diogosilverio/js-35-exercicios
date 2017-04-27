/**
 * Created by diogo on 25/04/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class ConnectionFactory {
    constructor() {
        this._database = "casadocodigo";
        this.verificaAmbiente();
        this.conecta();
    }
    connection() {
        return this._connection;
    }
    verificaAmbiente() {
        if (process.env.NODE_ENV === "test") {
            this._database += "_teste";
        }
    }
    conecta() {
        const database = this._database;
        this._connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database,
            port: 32768
        });
    }
}
exports.ConnectionFactory = ConnectionFactory;
