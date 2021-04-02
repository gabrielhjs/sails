// import { TypeormProductImagesRepository } from "../../../repositories/implements/typeorm/Products/ProductImagesRepository"
import { AddProductImageController } from "./AddProductImageController"
import { AddProductImageUseCase } from "./AddProductImageUseCase"


// const productImageRepository = new TypeormProductImagesRepository

const addProductImageUseCase = new AddProductImageUseCase(
	// productImageRepository
)

const addProductImageController = new AddProductImageController(
	addProductImageUseCase
)

export { addProductImageController, addProductImageUseCase }