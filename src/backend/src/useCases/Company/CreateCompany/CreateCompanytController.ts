import { Request, Response } from "express"
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

export class CreateCompanyController {
	constructor(
		private createCompanyUseCase: CreateCompanyUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, ownerId } = request.body

		try {
			const newCompany = await this.createCompanyUseCase.execute({
				name,
				ownerId
			})

			return response.status(201).send(newCompany)
		}
		catch (error) {
			return response.status(400).send({
				error: error.message || "Unexpected Error."
			})
		}

	}
}