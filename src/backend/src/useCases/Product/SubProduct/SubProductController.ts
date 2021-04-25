import { Request, Response } from "express"
import { Controller } from "../../IController";
import { SubProductUseCase } from "./SubProductUseCase";


export class SubProductController implements Controller {
	constructor(
		private subUserUseCase: SubProductUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { productId, amount } = request.body

		try {
			const quantity = await this.subUserUseCase.execute({
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