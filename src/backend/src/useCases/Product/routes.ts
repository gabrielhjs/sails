import { Router } from "express"
import { createProductController } from "./CreateProduct"


const productRouter = Router()


productRouter.post("/", (request, response) => {
	return createProductController.handle(request, response)
})


export { productRouter }
