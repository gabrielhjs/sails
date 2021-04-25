import { TypeormProductCategoryRepository } from "../../../repositories/implements/typeorm/Products/ProductCategoryRepository"
import { GetProductCategoryController } from "./GetProductCategoryController"
import { GetProductCategoryUseCase } from "./GetProductCategoryUseCase"


const productCategoryRepository = new TypeormProductCategoryRepository


const getProductCategoryUseCase = new GetProductCategoryUseCase(
	productCategoryRepository
)

const getProductCategoryController = new GetProductCategoryController(
	getProductCategoryUseCase
)

export { getProductCategoryController, getProductCategoryUseCase }