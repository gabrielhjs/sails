import { BcryptJwtAuthenticationProvider } from "../../providers/AuthenticationProvider/implements/BcryptJwtAuthenticationProvider";
import { GenericUsersRepository } from "../../repositories/implements/gerericUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const genericUsersRepository = new GenericUsersRepository
const bcryptJwtAuthenticationProvider = new BcryptJwtAuthenticationProvider

const createUserUseCase = new CreateUserUseCase(
	genericUsersRepository,
	bcryptJwtAuthenticationProvider
)

const createUserController = new CreateUserController(
	createUserUseCase
)

export { createUserController, createUserUseCase }