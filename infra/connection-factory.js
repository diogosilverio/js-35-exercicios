const mysql = require("mysql");

module.exports = () => {

	let connection = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "casadocodigo"
		});

	return connection;
}