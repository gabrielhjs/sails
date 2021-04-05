import { Request, Response } from "express"
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
	constructor(
		private createUserUseCase: CreateProductUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, companyId } = request.body

		try {
			const newProduct = await this.createUserUseCase.execute({
				name,
				companyId
			})

			return response.status(201).send(newProduct)
		}
		catch (error) {
			return response.status(400).send({
				error: error.message || "Unexpected Error."
			})
		}

	}
}