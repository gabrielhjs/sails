import { BcryptJwtAuthenticationProvider } from "../../providers/AuthenticationProvider/implements/BcryptJwtAuthenticationProvider";
import { GenericUsersRepository } from "../../repositories/implements/gerericUsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const bcryptJwtAuthenticationProvider = new BcryptJwtAuthenticationProvider
const generecUsersRepository = new GenericUsersRepository

const authenticateUserUseCase = new AuthenticateUserUseCase(
	generecUsersRepository,
	bcryptJwtAuthenticationProvider
)

const authenticateUserController = new AuthenticateUserController(
	authenticateUserUseCase
)

export { authenticateUserUseCase, authenticateUserController }