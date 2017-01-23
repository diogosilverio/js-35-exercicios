
module.exports = (app) => {
	app.get("/produtos", (req, res) => res.render("produto/lista"));
	app.get("/produtos/:id", (req, res) => res.render("produto/lista"));
}