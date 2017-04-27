/**
 * Created by diogo on 25/04/17.
 */
import {Application} from 'express';

export interface Rota{
    configurarRotas(app: Application);
}