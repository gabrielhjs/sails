import { TypeormProductRepository } from "../../../repositories/implements/typeorm/Products/ProductsRepository"
import { TypeormProductStockRepository } from "../../../repositories/implements/typeorm/Products/ProductStockRepository"
import { SubProductController } from "./SubProductController"
import { SubProductUseCase } from "./SubProductUseCase"


const productRepository = new TypeormProductRepository
const productStockRepository = new TypeormProductStockRepository

const subProductUseCase = new SubProductUseCase(
	productRepository,
	productStockRepository
)

const subProductController = new SubProductController(
	subProductUseCase
)

export { subProductController, subProductUseCase }