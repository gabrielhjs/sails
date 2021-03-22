import { IUsersRepository } from "../../../repositories/IUsers/IUsersRepository";
import { IGetUserRequestDTO } from "./GetUsersDTO";

export class GetUserUseCase {
	constructor(
		private userRepository: IUsersRepository,
	) { }

	async execute(data: IGetUserRequestDTO) {
		return await this.userRepository.findByQuery(data.request)
	}
}