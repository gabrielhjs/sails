import { TypeOrmCompanyRepository } from "../../../repositories/implements/typeorm/Company/CompaniesRepository"
import { TypeormUsersRepository } from "../../../repositories/implements/typeorm/Users/UsersRepository"
import { CreateCompanyController } from "./CreateCompanytController"
import { CreateCompanyUseCase } from "./CreateCompanyUseCase"


const userRepository = new TypeormUsersRepository
const companyRepository = new TypeOrmCompanyRepository


const createCompanyUseCase = new CreateCompanyUseCase(
	userRepository,
	companyRepository
)

const createCompanyController = new CreateCompanyController(
	createCompanyUseCase
)

export { createCompanyController, createCompanyUseCase }