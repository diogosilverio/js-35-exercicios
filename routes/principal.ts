/**
 * Created by diogo on 25/04/17.
 */

import {Application, Request, Response} from 'express';
import {Rota} from './irota';

export class PrincipalRota implements Rota {

    configurarRotas(app: Application) {
        this._getHome(app);
    }

    private _getHome(app: Application) {
        app.get("/", (req: Request, res: Response) => {
            res.redirect("/produtos");
        });
    }
}