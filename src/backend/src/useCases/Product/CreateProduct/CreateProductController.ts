import { Request, Response } from "express"
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
	constructor(
		private createUserUseCase: CreateProductUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { name } = request.body

		try {
			await this.createUserUseCase.execute({
				name
			})

			return response.status(201).send()
		}
		catch (error) {
			return response.status(400).send({
				error: error.message || "Unexpected Error."
			})
		}

	}
}