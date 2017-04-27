/**
 * Created by diogo on 25/04/17.
 */

export abstract class GenericDAO {

    private _connection: any;

    constructor(connection){
        this._connection = connection;
    }

    protected dql(sql: string, params: any): Promise<any> {
        return this._query(sql, true, params);
    }

    protected dml(sql: string, params: any): Promise<any> {
        return this._query(sql, false, params);
    }

    private _query(sql: string, dql: boolean, params: any): Promise<any>{
        const dao = this;
        return new Promise(function(resolve, reject){
            dao._connection.query(sql, params, (err, result) => {
                if(err) {
                    reject(err);
                } else {
                    if(dql){
                        resolve(result);
                    }
                }
            });
        });
    }

}