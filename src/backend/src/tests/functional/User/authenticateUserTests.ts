import request from "supertest"
import { encryptProvider, usersRepository } from ".."
import { app } from "../../../app"
import { User } from "../../../entities/User"
import { TestPropsDTO } from "../testsDTO"


export const authenticateUserTests = (props: TestPropsDTO) => {
	describe("POST /users/login", () => {

		it("should be authenticated user", async () => {
			const user = new User({
				name: "test",
				password: await encryptProvider.getHashPassword("test"),
				email: "test@test.com"
			})

			await usersRepository.save(user)

			const response = await request(app)
				.post("/user/login")
				.set("Content-Type", "application/json")
				.send({
					email: user.email,
					password: "test"
				})

			expect(response.status).toBe(200)
			expect(response.body.token).toBeDefined()
		})

		it("should be invalid password", async () => {
			const user = new User({
				name: "test",
				password: "test",
				email: "test@test.com"
			})

			await usersRepository.save(user)

			const response = await request(app)
				.post("/user/login")
				.set("Content-Type", "application/json")
				.send({
					email: user.email,
					password: "wrong password"
				})
			expect(response.status).toBe(200)
			expect(response.body.token).toBeUndefined()
		})

		it("should be invalid user", async () => {
			const user = new User({
				name: "test",
				password: "test",
				email: "test@test.com"
			})

			await usersRepository.save(user)

			const response = await request(app)
				.post("/user/login")
				.set("Content-Type", "application/json")
				.send({
					email: "invalid@test.com",
					password: "test"
				})
			expect(response.status).toBe(200)
			expect(response.body.token).toBeUndefined()
		})
	})
}