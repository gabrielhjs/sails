import { IUsersRepository } from "../../../repositories/IUsers/IUsersRepository";
import { UseCase } from "../../IUseCase";
import { IGetUserRequestDTO } from "./GetUsersDTO";


export class GetUserUseCase implements UseCase {
	constructor(
		private userRepository: IUsersRepository,
	) { }

	async execute(data: IGetUserRequestDTO) {
		return await this.userRepository.findByQuery(data.request)
	}
}