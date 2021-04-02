import { TypeormProductStockRepository } from "../../../repositories/implements/typeorm/Products/ProductStockRepository"
import { AddProductController } from "./AddProductController"
import { AddProductUseCase } from "./AddProductUseCase"


const productStockRepository = new TypeormProductStockRepository

const addProcutUseCase = new AddProductUseCase(
	productStockRepository
)

const addProductController = new AddProductController(
	addProcutUseCase
)

export { addProductController, addProcutUseCase }