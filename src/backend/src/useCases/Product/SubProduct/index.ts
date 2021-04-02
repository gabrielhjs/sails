import { TypeormProductStockRepository } from "../../../repositories/implements/typeorm/Products/ProductStockRepository"
import { SubProductController } from "./SubProductController"
import { SubProductUseCase } from "./SubProductUseCase"


const productStockRepository = new TypeormProductStockRepository

const subProductUseCase = new SubProductUseCase(
	productStockRepository
)

const subProductController = new SubProductController(
	subProductUseCase
)

export { subProductController, subProductUseCase }