class ProdutoDAO {

	constructor(connection){
		this._connection = connection;
	}

	lista(){
		return new Promise((resolve, reject) => {
			this._connection.query("select * from livros", (err, result) => {
				if(err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	}

}

module.exports = ProdutoDAO;