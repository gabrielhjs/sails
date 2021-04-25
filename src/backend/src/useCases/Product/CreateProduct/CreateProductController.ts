import { Request, Response } from "express"
import { Controller } from "../../IController";
import { CreateProductUseCase } from "./CreateProductUseCase";


export class CreateProductController implements Controller {
	constructor(
		private createProductUseCase: CreateProductUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, description, categoryId, companyId } = request.body

		try {
			const newProduct = await this.createProductUseCase.execute({
				name,
				description,
				categoryId,
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