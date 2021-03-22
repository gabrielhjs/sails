import { BcryptJwtAuthenticationProvider } from "../../../providers/AuthenticationProvider/implements/BcryptJwtAuthenticationProvider";
import { TypeormUsersRepository } from "../../../repositories/implements/typeorm/Users/UsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const bcryptJwtAuthenticationProvider = new BcryptJwtAuthenticationProvider
const generecUsersRepository = new TypeormUsersRepository

const authenticateUserUseCase = new AuthenticateUserUseCase(
	generecUsersRepository,
	bcryptJwtAuthenticationProvider
)

const authenticateUserController = new AuthenticateUserController(
	authenticateUserUseCase
)

export { authenticateUserUseCase, authenticateUserController }