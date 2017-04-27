/**
 * Created by diogo on 25/04/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrincipalRota {
    configurarRotas(app) {
        this._getHome(app);
    }
    _getHome(app) {
        app.get("/", (req, res) => {
            res.redirect("/produtos");
        });
    }
}
exports.PrincipalRota = PrincipalRota;
