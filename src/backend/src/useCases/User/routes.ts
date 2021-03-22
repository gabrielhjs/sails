import { Router } from "express"
import { authenticateUserController } from "./AuthenticateUser"
import { createUserController } from "./CreateUser"
import { getUserController } from "./GetUsers"


const userRouter = Router()


userRouter.post("/", (request, response) => {
	return createUserController.handle(request, response)
})


userRouter.get("/", (request, response) => {
	return getUserController.handle(request, response)
})


userRouter.post("/login/", (request, response) => {
	return authenticateUserController.handle(request, response)
})


export { userRouter }
