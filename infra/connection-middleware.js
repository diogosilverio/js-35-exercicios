const connectionFactory = require("./connection-factory");

module.exports = (req, res, next) => {
	console.log("Abrindo conexao...");
	req.connection = connectionFactory();
	next(); // Node para a execucao deste middleware 
			// para carregar os seguintes. Ao concluir
			// os outros middlewares, retorna para a 
			// instrucao seguinte.
	req.connection.end(() => console.log("Conexao fechada."));
}