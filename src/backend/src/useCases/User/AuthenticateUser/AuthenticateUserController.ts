import { Request, Response } from "express"
import { Controller } from "../../IController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


export class AuthenticateUserController implements Controller {
	constructor(
		private authenticateUserUseCase: AuthenticateUserUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body

		try {
			const jwt = await this.authenticateUserUseCase.execute({
				email,
				password
			})

			return response.status(200).send({
				token: jwt
			})
		}
		catch (error) {
			return response.status(200).send({
				error: error.message || "Unexpected Error."
			})
		}
	}
}