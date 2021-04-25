import { TypeOrmCompanyRepository } from "../../../repositories/implements/typeorm/Company/CompaniesRepository"
import { TypeormProductCategoryRepository } from "../../../repositories/implements/typeorm/Products/ProductCategoryRepository"
import { TypeormProductRepository } from "../../../repositories/implements/typeorm/Products/ProductsRepository"
import { CreateProductController } from "./CreateProductController"
import { CreateProductUseCase } from "./CreateProductUseCase"


const productRepository = new TypeormProductRepository
const productCategoryRepository = new TypeormProductCategoryRepository
const companyRepository = new TypeOrmCompanyRepository


const createProductUseCase = new CreateProductUseCase(
	productRepository,
	productCategoryRepository,
	companyRepository,
)

const createProductController = new CreateProductController(
	createProductUseCase
)

export { createProductController, createProductUseCase }