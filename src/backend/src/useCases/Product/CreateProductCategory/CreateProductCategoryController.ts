import { Request, Response } from "express"
import { Controller } from "../../IController";
import { CreateProductCategoryUseCase } from "./CreateProductCategoryUseCase";


export class CreateProductCategoryController implements Controller {
	constructor(
		private createProductCategoryUseCase: CreateProductCategoryUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, description, productId, companyId } = request.body

		try {
			const newProductCategory = await this.createProductCategoryUseCase.execute({
				name,
				description,
				companyId
			})

			return response.status(201).send(newProductCategory)
		}
		catch (error) {
			return response.status(400).send({
				error: error.message || "Unexpected Error."
			})
		}
	}
}