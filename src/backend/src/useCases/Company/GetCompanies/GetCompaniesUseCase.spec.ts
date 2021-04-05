import request from "supertest"
import { app } from "../../../app"
import { testConnection } from "../../../typeorm/connect";

describe("Test Users", () => {
	beforeEach(() => {
		testConnection.create()
	})
	test("should response the GET method", async () => {
		const response = await request(app).get("/users/")
		console.log(response.body)
		expect(response.status).toBe(200)
		expect(response.body).toBeInstanceOf(Array)
	})
});