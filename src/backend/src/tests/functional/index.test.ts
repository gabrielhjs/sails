import request from "supertest"

import { app } from "../../app"
import { connection } from "../../typeorm/connect"
import { getUserTests } from "./User/getUserTests"
import { authenticationProvider } from "./"
import { createUserTests } from "./User/createUserTests"
import { authenticateUserTests } from "./User/authenticateUserTests"
import { getProductTests } from "./Product/getProductTests"
import { createProductTests } from "./Product/createProductTests"


describe("Running tests", () => {
	const token = authenticationProvider.getJwt("test user")

	beforeAll(async () => {
		await connection.create("test")
	})

	afterEach(async () => {
		connection.clear("test")
	})

	afterAll(async () => {
		connection.close("test")
	})

	it("should be ok", async () => {
		const response = await request(app)
			.get("/status")

		expect(response.status).toBe(200)
		expect(response.body).toStrictEqual({ status: "ok" })
	})

	getUserTests({ token })
	createUserTests({ token })
	authenticateUserTests({ token })
	getProductTests({ token })
	createProductTests({ token })
})