import { Request, Response } from "express"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
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
				authorization: jwt
			})
		}
		catch (error) {
			return response.status(400).send({
				message: error.message || "Unexpected Error."
			})
		}
	}
}