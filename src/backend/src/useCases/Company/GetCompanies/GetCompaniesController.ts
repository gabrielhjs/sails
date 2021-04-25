import { Request, Response } from "express"
import { Controller } from "../../IController"
import { GetCompanyUseCase } from "./GetCompaniesUseCase"


export class GetCompanyController implements Controller {
	constructor(
		private getCompanyUseCase: GetCompanyUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {

		try {
			const users = await this.getCompanyUseCase.execute({ request })

			return response.status(200).send(users)
		}
		catch (error) {
			return response.status(400).send({
				error: error.message || "Unexpected Error."
			})
		}

	}
}