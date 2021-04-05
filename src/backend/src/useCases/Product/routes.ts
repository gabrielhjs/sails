
import { Router } from "express"
import { authMiddleware, imageMiddleware } from "../.."

import { addProductController } from "./AddProduct"
import { addProductImageController } from "./AddProductImage"
import { createProductController } from "./CreateProduct"
import { getProductController } from "./getProducts"
import { subProductController } from "./SubProduct"


const productRouter = Router()


productRouter.post("/", authMiddleware.handle, (request, response) => {
	return createProductController.handle(request, response)
})

productRouter.get("/", authMiddleware.handle, (request, response) => {
	return getProductController.handle(request, response)
})

productRouter.post("/add", authMiddleware.handle, (request, response) => {
	return addProductController.handle(request, response)
})

productRouter.post("/sub", authMiddleware.handle, (request, response) => {
	return subProductController.handle(request, response)
})

productRouter.post("/upload/image", imageMiddleware.single("file"), (request, response) => {
	return addProductImageController.handle(request, response)
})


export { productRouter }
