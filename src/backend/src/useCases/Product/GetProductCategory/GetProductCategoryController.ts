import { Request, Response } from "express"
import { Controller } from "../../IController";
import { GetProductCategoryUseCase } from "./GetProductCategoryUseCase";


export class GetProductCategoryController implements Controller {
	constructor(
		private getProductCategoryUseCase: GetProductCategoryUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {

		try {
			const categories = await this.getProductCategoryUseCase.execute({ request })

			return response.status(202).send(categories)
		}
		catch (error) {
			return response.status(400).send({
				error: error.message || "Unexpected Error."
			})
		}
	}
}