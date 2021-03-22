import { User } from "../../../entities/User";
import { IAuthenticationProvider } from "../../../providers/AuthenticationProvider/IAuthenticationProvider";
import { IUsersRepository } from "../../../repositories/IUsers/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
	constructor(
		private userRepository: IUsersRepository,
		private authenticate: IAuthenticationProvider
	) { }

	async execute(data: ICreateUserRequestDTO) {
		const userAlreadyExists = await this.userRepository.findByEmail(data.email)
		if (userAlreadyExists) {
			throw new Error("User already exists.")
		}

		else {
			data.password = await this.authenticate.getHashPassword(data.password)
			const user = new User(data)
			await this.userRepository.save(user)
		}
	}
}