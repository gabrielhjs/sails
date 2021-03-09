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
		const passwordHash = await this.authentication.getHashPassword(data.password)

		if (this.authentication.comparePassword(passwordHash, user.password)) {
			return this.authentication.getJwt(user.email)
		}
		else {
			throw new Error("User password not match.")
		}
	}
}