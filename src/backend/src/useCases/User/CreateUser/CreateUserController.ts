import { Request, Response } from "express"
import { Controller } from "../../IController";
import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController implements Controller {
	constructor(
		private createUserUseCase: CreateUserUseCase
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, email, password } = request.body

		try {
			const jwt = await this.createUserUseCase.execute({
				name,
				email,
				password
			})

			return response.status(201).send({
				token: jwt
			})
		}
		catch (error) {
			return response.status(400).send({
				error: error.message || "Unexpected Error."
			})
		}

	}
}