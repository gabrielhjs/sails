import { BcryptJwtAuthenticationProvider } from "../../providers/AuthenticationProvider/implements/BcryptJwtAuthenticationProvider";
import { GenericUsersRepository } from "../../repositories/implements/gerericUsersRepository";
import { TypeormUsersRepository } from "../../repositories/implements/typeormUsersRepository";
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