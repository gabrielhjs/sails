import { IAuthenticationProvider } from "../../providers/AuthenticationProvider/IAuthenticationProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAuthenticateUserDTO } from "./AuthenticateUserDTO";

export class AuthenticateUserUseCase {
	constructor(
		private usersRepository: IUsersRepository,
		private authentication: IAuthenticationProvider
	) { }

	async execute(data: IAuthenticateUserDTO): Promise<string> {
		const user = await this.usersRepository.findByEmail(data.email)
		if (!user) {
			throw new Error("User and/or password not match")
		}
		else{
			if (await this.authentication.comparePassword(data.password, user.password)) {
				return await this.authentication.getJwt(user.email)
			}
			else {
				throw new Error("User and/or password not match")
			}
		}
	}
}