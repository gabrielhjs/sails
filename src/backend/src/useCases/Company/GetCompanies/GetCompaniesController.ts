import { Request, Response } from "express"
import { GetCompanyUseCase } from "./GetCompaniesUseCase"


export class GetCompanyController {
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