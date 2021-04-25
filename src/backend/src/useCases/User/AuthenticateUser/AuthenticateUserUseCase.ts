import { IAuthenticationProvider } from "../../../providers/AuthenticationProvider/IAuthenticationProvider";
import { IUsersRepository } from "../../../repositories/IUsers/IUsersRepository";
import { UseCase } from "../../IUseCase";
import { IAuthenticateUserDTO } from "./AuthenticateUserDTO";


export class AuthenticateUserUseCase implements UseCase {
	constructor(
		private usersRepository: IUsersRepository,
		private authentication: IAuthenticationProvider
	) { }

	async execute(data: IAuthenticateUserDTO): Promise<string> {
		const user = await this.usersRepository.findByEmail(data.email)
		if (!user) {
			throw new Error("User and/or password not match")
		}
		else {
			if (await this.authentication.comparePassword(data.password, user.password)) {
				return await this.authentication.getJwt(user.id)
			}
			else {
				throw new Error("User and/or password not match")
			}
		}
	}
}