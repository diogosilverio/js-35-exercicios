class ProdutoDAO {

	constructor(connection){
		this._connection = connection;
	}

	lista(callback){
		this._connection.query("select * from livros", callback);
	}

}

module.exports = ProdutoDAO;