import { User } from "../../../entities/User";
import { IAuthenticationProvider } from "../../../providers/AuthenticationProvider/IAuthenticationProvider";
import { IUsersRepository } from "../../../repositories/IUsers/IUsersRepository";
import { UseCase } from "../../IUseCase";
import { ICreateUserRequestDTO } from "./CreateUserDTO";


export class CreateUserUseCase implements UseCase {
	constructor(
		private userRepository: IUsersRepository,
		private authentication: IAuthenticationProvider
	) { }

	async execute(data: ICreateUserRequestDTO) {
		const userAlreadyExists = await this.userRepository.findByEmail(data.email)
		if (userAlreadyExists) {
			throw new Error("User already exists.")
		}

		else {
			data.password = await this.authentication.getHashPassword(data.password)
			const userId = await this.userRepository.save(new User(data))
			return await this.authentication.getJwt(userId)
		}
	}
}