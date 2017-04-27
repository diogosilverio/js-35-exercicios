/**
 * Created by diogo on 25/04/17.
 */

export abstract class GenericDAO {

    private _connection: any;

    constructor(connection){
        this._connection = connection;
    }

    protected dql(sql: string, params: any, single: boolean = false): Promise<any> {
        return this._query(sql, true, single, params);
    }

    protected dml(sql: string, params: any): Promise<any> {
        return this._query(sql, false, false, params);
    }

    private _query(sql: string, dql: boolean, single: boolean, params: any): Promise<any>{
        const dao = this;
        return new Promise(function(resolve, reject){
            dao._connection.query(sql, params, (err, result) => {
                if(err) {
                    reject(err);
                } else {
                    if(dql){
                        if(single){
                            result = result[0];
                        }
                        resolve(result);
                    }

                    resolve();
                }
            });
        });
    }

}