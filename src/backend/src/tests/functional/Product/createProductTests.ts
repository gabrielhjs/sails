import request from "supertest"
import { companyRepository, productRepository, usersRepository } from ".."
import { app } from "../../../app"
import { Company } from "../../../entities/Company"
import { Product } from "../../../entities/Product"
import { ProductStock } from "../../../entities/ProductStock"
import { User } from "../../../entities/User"
import { TestPropsDTO } from "../testsDTO"


export const createProductTests = (props: TestPropsDTO) => {
	describe("POST /product", () => {
		const user = new User({
			name: "test",
			password: "test",
			email: "test@test.com"
		})

		const company = new Company({
			name: "test company",
			owner: user
		})

		const productStock = new ProductStock({
			quantity: 0
		})

		const product = new Product({
			name: "test product",
			company: company,
			stock: productStock
		})

		it("should be unauthorized", async () => {
			const response = await request(app)
				.post("/product")

			expect(response.status).toBe(401)
		})

		it("should be invalid company", async () => {
			const response = await request(app)
				.post("/product")
				.set("Authorization", `Bearer ${await props.token}`)
				.set("Content-Type", "application/json")
				.send({
					name: product.name,
					companyId: user.id
				})

			expect(response.status).toBe(400)
		})

		it("should be new product", async () => {
			await usersRepository.save(user)
			await companyRepository.save(company)

			const response = await request(app)
				.post("/product")
				.set("Authorization", `Bearer ${await props.token}`)
				.set("Content-Type", "application/json")
				.send({
					name: product.name,
					companyId: company.id
				})

			expect(response.status).toBe(201)
			expect(response.body.name).toBe(product.name)
			expect(response.body.company.id).toBe(product.company.id)
			expect(response.body.stock.quantity).toBe(0)
		})

		it("should be new product quantity", async () => {
			const newUser = new User({
				name: "test",
				password: "test",
				email: "test@test.com"
			})

			console.log(await usersRepository.save(newUser))
			console.log(newUser, company)

			company.owner = newUser

			await companyRepository.save(company)
			await productRepository.save(product)

			const response = await request(app)
				.post("/product/add")
				.set("Authorization", `Bearer ${await props.token}`)
				.set("Content-Type", "application/json")
				.send({
					amount: 10,
					productId: product.id
				})

			expect(response.body.updatedStock).toBe(10)
			expect(response.status).toBe(202)
		})
	})
}