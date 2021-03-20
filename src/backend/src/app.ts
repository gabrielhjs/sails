import express from "express"
import { Request, Response } from "express"
import compression from "compression"


const app = express()

app.use(express.json())
app.use(compression({
	level: 6,
	filter: (request: Request, response: Response) => {
		if (request.headers['x-no-compression']) {
			return false
		}
		return compression.filter(request, response)
	}
}))

export { app }
