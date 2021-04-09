import { Request, Response } from "express"
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
	constructor(
		private createProductUseCase: CreateProductUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, description, companyId } = request.body

		try {
			const newProduct = await this.createProductUseCase.execute({
				name,
				description,
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