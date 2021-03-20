import { Router } from "express"
import { authenticateUserController } from "./useCases/AuthenticateUser"
import { createUserController } from "./useCases/CreateUser"


const router = Router()


router.get("/status/", (request, response) => {
	return response.status(200).send({ status: "ok" })
})

router.post("/users/", (request, response) => {
	return createUserController.handle(request, response)
})

router.post("/login/", (request, response) => {
	return authenticateUserController.handle(request, response)
})

export { router }
