import { Router } from "express"

import { IAuthenticationMiddleware } from "../../providers/AuthenticationProvider/IAuthenticationProvider"
import { JwtAuthenticationMiddleware } from "../../providers/AuthenticationProvider/implements/JwtMiddlewareProvider"


import { authenticateUserController } from "./AuthenticateUser"
import { createUserController } from "./CreateUser"
import { getUserController } from "./GetUsers"


const userRouter = Router()
const authMiddleware: IAuthenticationMiddleware = new JwtAuthenticationMiddleware


userRouter.post("/", (request, response) => {
	return createUserController.handle(request, response)
})


userRouter.get("/", authMiddleware.auth, (request, response) => {
	return getUserController.handle(request, response)
})


userRouter.post("/login/", (request, response) => {
	return authenticateUserController.handle(request, response)
})


export { userRouter }
