import request from "supertest"
import { app } from "../../../app"
import { TestPropsDTO } from "../testsDTO"


export const createUserTests = (props: TestPropsDTO) => {
	describe("POST /user", () => {

		beforeAll(async () => {

		})

		it("should be new user", async () => {
			const response = await request(app)
				.post("/user")
				.set("Content-Type", "application/json")
				.send({
					name: "test",
					password: "test",
					email: "test@test.com"
				})

			expect(response.status).toBe(201)
			expect(response.body.token).toBeDefined()
		})

		it("should be duplicate user", async () => {
			await request(app)
				.post("/user")
				.set("Content-Type", "application/json")
				.send({
					name: "test",
					password: "test",
					email: "test@test.com"
				})

			const response = await request(app)
				.post("/user")
				.set("Content-Type", "application/json")
				.send({
					name: "test",
					password: "test",
					email: "test@test.com"
				})
			expect(response.status).toBe(400)
		})

		it("should be error", async () => {
			const response = await request(app)
				.post("/user")
				.set("Content-Type", "application/json")
				.send({
					name: "test",
					email: "test@test.com"
				})
			expect(response.status).toBe(400)
		})
	})
}