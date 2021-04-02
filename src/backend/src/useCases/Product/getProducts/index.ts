import { TypeormProductRepository } from "../../../repositories/implements/typeorm/Products/ProductsRepository"
import { GetProductController } from "./getProductsController"
import { GetProductsUseCase } from "./getProductsUseCase"


const productRepository = new TypeormProductRepository

const getProductUseCase = new GetProductsUseCase(
	productRepository
)

const getProductController = new GetProductController(
	getProductUseCase
)

export { getProductController, getProductUseCase }