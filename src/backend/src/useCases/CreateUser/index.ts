import { BcryptJwtAuthenticationProvider } from "../../providers/AuthenticationProvider/implements/BcryptJwtAuthenticationProvider";
import { GenericUsersRepository } from "../../repositories/implements/gerericUsersRepository";
import { TypeormUsersRepository } from "../../repositories/implements/typeormUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const UsersRepository = new TypeormUsersRepository
const AuthenticationProvider = new BcryptJwtAuthenticationProvider

const createUserUseCase = new CreateUserUseCase(
	UsersRepository,
	AuthenticationProvider
)

const createUserController = new CreateUserController(
	createUserUseCase
)

export { createUserController, createUserUseCase }