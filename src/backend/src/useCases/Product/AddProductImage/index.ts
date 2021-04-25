// import { TypeormProductImagesRepository } from "../../../repositories/implements/typeorm/Products/ProductImagesRepository"
import { TypeormProductImageRepository } from "../../../repositories/implements/typeorm/Products/ProductImagesRepository"
import { TypeormProductRepository } from "../../../repositories/implements/typeorm/Products/ProductsRepository"
import { AddProductImageController } from "./AddProductImageController"
import { AddProductImageUseCase } from "./AddProductImageUseCase"


const productImageRepository = new TypeormProductImageRepository
const productRepository = new TypeormProductRepository

const addProductImageUseCase = new AddProductImageUseCase(
	productImageRepository,
	productRepository
)

const addProductImageController = new AddProductImageController(
	addProductImageUseCase
)

export { addProductImageController, addProductImageUseCase }