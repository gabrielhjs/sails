import { TypeormProductRepository } from "../../../repositories/implements/typeorm/Products/ProductsRepository"
import { CreateProductController } from "./CreateProductController"
import { CreateProductUseCase } from "./CreateProductUseCase"


const productRepository = new TypeormProductRepository


const createProcutUseCase = new CreateProductUseCase(
	productRepository
)

const createProductController = new CreateProductController(
	createProcutUseCase
)

export { createProductController, createProcutUseCase }