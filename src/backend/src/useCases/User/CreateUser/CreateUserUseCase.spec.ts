import request from "supertest"
import { app } from "../../../app"
import { connection } from "../../../typeorm/connect"


describe("Test create user", () => {
	beforeAll(async () => {
		await connection.create()
	})

	it("should be wrong new user data", async () => {
		const response = await request(app)
			.post("/user")
			.set("Content-Type", "application/json")
			.send({
				name: "test1",
				password: "test1"
			})

		expect(response.status).toBe(400)
	})

	it("should be great new user", async () => {
		const response = await request(app)
			.post("/user")
			.set("Content-Type", "application/json")
			.send({
				name: "test1",
				email: "test1@test.com",
				password: "test1"
			})

		expect(response.status).toBe(201)
		expect(response.body.token).toBeDefined()
	})

})
