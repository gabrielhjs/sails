import request from "supertest"
import { app } from "../../../app"
import { TestPropsDTO } from "../testsDTO"


export const getUserTests = (props: TestPropsDTO) => {
	describe("GET /user", () => {

		it("should be unauthorized", async () => {
			const response = await request(app)
				.get("/user")

			expect(response.status).toBe(401)
		})

		it("should be users list", async () => {
			const response = await request(app)
				.get("/user")
				.set("Authorization", `Bearer ${await props.token}`)

			expect(response.status).toBe(200)
			expect(response.body).toBeInstanceOf(Array)
		})
	})
}
