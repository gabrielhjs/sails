import { TypeOrmCompanyRepository } from "../../../repositories/implements/typeorm/Company/CompaniesRepository"
import { TypeormProductRepository } from "../../../repositories/implements/typeorm/Products/ProductsRepository"
import { CreateProductController } from "./CreateProductController"
import { CreateProductUseCase } from "./CreateProductUseCase"


const productRepository = new TypeormProductRepository
const companyRepository = new TypeOrmCompanyRepository


const createProductUseCase = new CreateProductUseCase(
	productRepository,
	companyRepository
)

const createProductController = new CreateProductController(
	createProductUseCase
)

export { createProductController, createProductUseCase }