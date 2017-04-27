/**
 * Created by diogo on 25/04/17.
 */
import {Application, Request, Response} from 'express';
import {Rota} from './irota';

export class ClienteRota implements Rota{

    configurarRotas(app: Application) {
        this._getClientesBoasVindas(app);
    }

    private _getClientesBoasVindas(app: Application) {
        app.get("/clientes", (req: Request, res: Response)=>{
           res.render("cliente/boas-vindas");
        });
    }
}
