"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClienteRota {
    configurarRotas(app) {
        this._getClientesBoasVindas(app);
    }
    _getClientesBoasVindas(app) {
        app.get("/clientes", (req, res) => {
            res.render("cliente/boas-vindas");
        });
    }
}
exports.ClienteRota = ClienteRota;
