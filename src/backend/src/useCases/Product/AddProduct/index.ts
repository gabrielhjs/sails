import { TypeormProductRepository } from "../../../repositories/implements/typeorm/Products/ProductsRepository"
import { TypeormProductStockRepository } from "../../../repositories/implements/typeorm/Products/ProductStockRepository"
import { AddProductController } from "./AddProductController"
import { AddProductUseCase } from "./AddProductUseCase"


const productRepository = new TypeormProductRepository
const productStockRepository = new TypeormProductStockRepository


const addProcutUseCase = new AddProductUseCase(
	productRepository,
	productStockRepository
)

const addProductController = new AddProductController(
	addProcutUseCase
)

export { addProductController, addProcutUseCase }