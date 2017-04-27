/**
 * Created by diogo on 25/04/17.
 */

import * as express from "express";
import * as bodyParser from "body-parser";
import expressValidator = require("express-validator");
import * as methodOverride from "method-override";
import * as connectionMiddleware from "./infra/connection-middleware";
import * as http from "http";
import * as io from "socket.io";
import {ClienteRota} from "./routes/cliente"
import {PrincipalRota} from "./routes/principal"
import {ProdutoRota} from "./routes/produto"

export class CustomExpress {

    private _app: express.Application;
    private _http: http.Server;

    public constructor(){
        this._app = express();
        this._configuraExpress();
    }

    public app(){
        return this._app;
    }

    public listen(porta: number){
        this._http.listen(porta, ()=>{
            console.log(`Servidor http/websocket de pe na porta ${porta}`);
        });
    }

    private _configuraExpress() {
        this._app.set("view engine", "ejs");
        this._app.use(express.static("public"));
        this._app.use(methodOverride("_method"));
        this._app.use(bodyParser.urlencoded({extended: true}));
        this._app.use(bodyParser.json());
        this._app.use(expressValidator());
        this._app.use(connectionMiddleware.default);

        this._configuraRotas();
        this._configuraStatus();
        this._configuraSocketIO();
    }

    private _configuraRotas() {
        new ProdutoRota().configurarRotas(this._app);
        new ClienteRota().configurarRotas(this._app);
        new PrincipalRota().configurarRotas(this._app);
    }

    private _configuraStatus() {
        this._app.use("*", (req, res, next) => {
            res.status(400).render("errors/400");
        });
    }

    private _configuraSocketIO() {
        this._http = http.createServer(this._app);
        const socketIO = io(this._http);
        this._app.set("io", socketIO);
    }
}