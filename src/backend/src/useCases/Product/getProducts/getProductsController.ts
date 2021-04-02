import { Request, Response } from "express"
import { GetProductsUseCase } from "./getProductsUseCase";


export class GetProductController {
	constructor(
		private getProductsUseCase: GetProductsUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {

		try {
			const products = await this.getProductsUseCase.execute({ request })

			return response.status(200).send(products)
		}
		catch (error) {
			return response.status(400).send({
				error: error.message || "Unexpected Error."
			})
		}

	}
}