import { Router } from "express"
import { authMiddleware } from "../.."
import { createCompanyController } from "./CreateCompany"
import { getCompanyController } from "./GetCompanies"


const companyRouter = Router()


companyRouter.post("/", authMiddleware.handle, (request, response) => {
	return createCompanyController.handle(request, response)
})

companyRouter.get("/", authMiddleware.handle, (request, response) => {
	return getCompanyController.handle(request, response)
})


export { companyRouter }