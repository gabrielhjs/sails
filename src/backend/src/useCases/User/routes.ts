import { Router } from "express"
import { authMiddleware } from "../.."
import { authenticateUserController } from "./AuthenticateUser"
import { createUserController } from "./CreateUser"
import { getUserController } from "./GetUsers"


const userRouter = Router()


userRouter.post("/", (request, response) => {
	return createUserController.handle(request, response)
})


userRouter.get("/", authMiddleware.handle, (request, response) => {
	return getUserController.handle(request, response)
})


userRouter.post("/login/", (request, response) => {
	return authenticateUserController.handle(request, response)
})


export { userRouter }
