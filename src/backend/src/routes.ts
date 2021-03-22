import { Router } from "express"
import { createProductController } from "./useCases/Product/CreateProduct"


const router = Router()


router.get("/status/", (request, response) => {
	return response.status(200).send({ status: "ok" })
})


router.post("/products/", (request, response) => {
	return createProductController.handle(request, response)
})


export { router }
