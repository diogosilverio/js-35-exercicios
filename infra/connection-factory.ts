/**
 * Created by diogo on 25/04/17.
 */

import * as mysql from "mysql"

export class ConnectionFactory{

    private _database: string = "casadocodigo";
    private _connection;

    constructor(){
        this.verificaAmbiente();
        this.conecta();
    }

    public connection() {
        return this._connection;
    }

    private verificaAmbiente() {
        if(process.env.NODE_ENV === "test"){
            this._database += "_teste";
        }
    }

    private conecta() {
        const database: string = this._database;

        this._connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database,
            port: 32768
        });
    }

}