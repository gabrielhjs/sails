import { Request, Response } from "express"

import { AddProductImageUseCase } from "./AddProductImageUseCase"

export class AddProductImageController {
	constructor(
		private addProductImageUseCase: AddProductImageUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { filename, size } = request.file
		const { productId } = request.body

		try {
			await this.addProductImageUseCase.execute({
				productId,
				filename,
				size
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