/**
 * Created by diogo on 25/04/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const methodOverride = require("method-override");
const connectionMiddleware = require("./infra/connection-middleware");
const http = require("http");
const io = require("socket.io");
const cliente_1 = require("./routes/cliente");
const principal_1 = require("./routes/principal");
const produto_1 = require("./routes/produto");
class CustomExpress {
    constructor() {
        this._app = express();
        this._configuraExpress();
    }
    app() {
        return this._app;
    }
    listen(porta) {
        this._http.listen(porta, () => {
            console.log(`Servidor http/websocket de pe na porta ${porta}`);
        });
    }
    _configuraExpress() {
        this._app.set("view engine", "ejs");
        this._app.use(express.static("public"));
        this._app.use(methodOverride("_method"));
        this._app.use(bodyParser.urlencoded({ extended: true }));
        this._app.use(bodyParser.json());
        this._app.use(expressValidator());
        this._app.use(connectionMiddleware.default);
        this._configuraRotas();
        this._configuraStatus();
        this._configuraSocketIO();
    }
    _configuraRotas() {
        new produto_1.ProdutoRota().configurarRotas(this._app);
        new cliente_1.ClienteRota().configurarRotas(this._app);
        new principal_1.PrincipalRota().configurarRotas(this._app);
    }
    _configuraStatus() {
        this._app.use("*", (req, res, next) => {
            res.status(400).render("errors/400");
        });
    }
    _configuraSocketIO() {
        this._http = http.createServer(this._app);
        const socketIO = io(this._http);
        this._app.set("io", socketIO);
    }
}
exports.CustomExpress = CustomExpress;
