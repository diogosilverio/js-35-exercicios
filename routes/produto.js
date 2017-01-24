
const mysql = require("mysql");

module.exports = (app) => {
	app.get("/produtos", (req, res) => {

		let connection = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "casadocodigo"
		});

		connection.query("select * from livros", (err, result) => { //Callback error first*
			if(err){
				return console.log(err);
			}

			res.render("produto/lista", {lista: result});
			
			
		});

	});

	app.get("/produtos/:id", (req, res) => res.render("produto/lista"));
}