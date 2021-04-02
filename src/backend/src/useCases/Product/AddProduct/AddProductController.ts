import { Request, Response } from "express"
import { AddProductUseCase } from "./AddProductUseCase";

export class AddProductController {
	constructor(
		private addUserUseCase: AddProductUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { productId, amount } = request.body

		try {
			const quantity = await this.addUserUseCase.execute({
				productId,
				amount
			})

			return response.status(202).send({ updatedStock: quantity })
		}
		catch (error) {
			return response.status(400).send({
				error: error.message || "Unexpected Error."
			})
		}

	}
}