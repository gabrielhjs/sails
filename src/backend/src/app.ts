import express from "express"
import { Request, Response } from "express"
import compression from "compression"
import { router } from "./routes"
import { userRouter } from "./useCases/User/UserRoutes"
import { productRouter } from "./useCases/Product/ProductRoutes"
import { companyRouter } from "./useCases/Company/CompanyRoutes"


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(compression({
	filter: (request: Request, response: Response) => {
		if (request.headers['x-no-compression']) { return false }
		return compression.filter(request, response)
	}
}))


app.use(router)
app.use("/user", userRouter)
app.use("/product", productRouter)
app.use("/company", companyRouter)


export { app }
