class LivroDAO {

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

	adiciona(livro){
		return new Promise((resolve, reject) => {
			this._connection.query("insert into livros set ?", livro, (err) => {
				if(err) {
					console.log(err);
					return reject("Nao foi possivel salvar livro");
				}
				
				resolve();
			});
		});
	}

	remove(id){
		return new Promise((resolve, reject) => {
			this._connection.query("delete from livros where id =?", [id], (err) =>{
				if(err) {
					console.log(err);
					return reject("Nao foi possivel apagar o livro id " + id);
				}

				resolve();
			});
		});
	}

}

module.exports = LivroDAO;