import {CustomExpress} from "../../custom-express";
import * as supertest from "supertest";

const request = supertest(new CustomExpress().app());

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

	it("deve possuir livro de testes", (done) =>{
		request
			.get("/produtos")
				.expect(/Testes com Mocha/, done);
	});
})