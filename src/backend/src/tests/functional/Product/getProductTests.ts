import request from "supertest"
import { app } from "../../../app"
import { TestPropsDTO } from "../testsDTO"


export const getProductTests = (props: TestPropsDTO) => {
	describe("GET /product", () => {

		it("should be unauthorized", async () => {
			const response = await request(app)
				.get("/product")

			expect(response.status).toBe(401)
		})

		it("should be poroducts list", async () => {
			const response = await request(app)
				.get("/product")
				.set("Authorization", `Bearer ${await props.token}`)

			expect(response.status).toBe(200)
			expect(response.body).toBeInstanceOf(Array)
		})
	})
}