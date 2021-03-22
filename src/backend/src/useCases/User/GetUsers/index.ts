import { TypeormUsersRepository } from "../../../repositories/implements/typeorm/Users/UsersRepository"
import { GetUserController } from "./GetUsersController"
import { GetUserUseCase } from "./GetUsersUseCase"


const UsersRepository = new TypeormUsersRepository

const getUserUseCase = new GetUserUseCase(
	UsersRepository
)

const getUserController = new GetUserController(
	getUserUseCase
)

export { getUserController, getUserUseCase }