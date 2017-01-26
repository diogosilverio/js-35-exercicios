const app = require("../../custom-express.js");
const supertest = require("supertest");

const request = supertest(app);

describe("Produto", () => {
	it("deve devolver html", (done) => {
		request
			.get("/produtos")
				.expect("Content-type", /html/)
				.expect(200, done);
	});

	it("deve devolver json", (done) => {
		request
			.get("/produtos")
				.set("Accept", "application/json")
				.expect("Content-type", /json/)
				.expect(200, done);
	});
})