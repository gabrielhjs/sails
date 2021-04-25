import { TypeOrmCompanyRepository } from "../../../repositories/implements/typeorm/Company/CompaniesRepository"
import { TypeormProductCategoryRepository } from "../../../repositories/implements/typeorm/Products/ProductCategoryRepository"
import { CreateProductCategoryController } from "./CreateProductCategoryController"
import { CreateProductCategoryUseCase } from "./CreateProductCategoryUseCase"


const productCategoryRepository = new TypeormProductCategoryRepository
const companyRepository = new TypeOrmCompanyRepository


const createProductCategoryUseCase = new CreateProductCategoryUseCase(
	productCategoryRepository,
	companyRepository
)

const createProductCategoryController = new CreateProductCategoryController(
	createProductCategoryUseCase
)

export { createProductCategoryController, createProductCategoryUseCase }