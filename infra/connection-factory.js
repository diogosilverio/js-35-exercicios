const mysql = require("mysql");

module.exports = () => {

	let database = "casadocodigo";

	if(process.env.NODE_ENV === "test"){
		database += "_teste";
	}

	const connection = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database
		});

	return connection;
}