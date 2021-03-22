import { Request, Response } from "express"
import { GetUserUseCase } from "./GetUsersUseCase"


export class GetUserController {
	constructor(
		private getUserUseCase: GetUserUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {

		try {
			const users = await this.getUserUseCase.execute({ request })

			return response.status(200).send(users)
		}
		catch (error) {
			return response.status(400).send({
				error: error.message || "Unexpected Error."
			})
		}

	}
}