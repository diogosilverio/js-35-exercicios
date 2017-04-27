/**
 * Created by diogo on 25/04/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericDAO {
    constructor(connection) {
        this._connection = connection;
    }
    dql(sql, params) {
        return this._query(sql, true, params);
    }
    dml(sql, params) {
        return this._query(sql, false, params);
    }
    _query(sql, dql, params) {
        return new Promise(function (resolve, reject) {
            this._connection().query(sql, params, (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    if (dql) {
                        resolve(result);
                    }
                }
            });
        });
    }
}
exports.GenericDAO = GenericDAO;
