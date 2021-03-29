import { BcryptJwtAuthenticationProvider } from "../../../providers/AuthenticationProvider/implements/BcryptJwtAuthenticationProvider";
import { TypeormUsersRepository } from "../../../repositories/implements/typeorm/Users/UsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const authenticationProvider = new BcryptJwtAuthenticationProvider
const usersRepository = new TypeormUsersRepository

const authenticateUserUseCase = new AuthenticateUserUseCase(
	usersRepository,
	authenticationProvider
)

const authenticateUserController = new AuthenticateUserController(
	authenticateUserUseCase
)

export { authenticateUserUseCase, authenticateUserController }