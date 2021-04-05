import { TypeOrmCompanyRepository } from "../../../repositories/implements/typeorm/Company/CompaniesRepository"
import { GetCompanyController } from "./GetCompaniesController"
import { GetCompanyUseCase } from "./GetCompaniesUseCase"


const companysRepository = new TypeOrmCompanyRepository

const getCompanyUseCase = new GetCompanyUseCase(
	companysRepository
)

const getCompanyController = new GetCompanyController(
	getCompanyUseCase
)

export { getCompanyController, getCompanyUseCase }