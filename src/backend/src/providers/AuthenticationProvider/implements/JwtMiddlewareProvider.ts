import jwt from "jsonwebtoken"

import { Request, Response, NextFunction } from "express"
import { IAuthenticationMiddleware } from "../IAuthenticationProvider"


export class JwtAuthenticationMiddleware implements IAuthenticationMiddleware {
	async handle(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
		const authorization = request.headers.authorization

		if (!authorization) {
			return response.status(401).send({ error: "No token provided" })
		}

		const parts = authorization?.split(" ")

		if (!(parts.length === 2)) {
			return response.status(401).send({ error: "Token error" })
		}

		const [scheme, token] = parts

		if (!/^Bearer$/i.test(scheme)) {
			return response.status(401).send({ error: "Wrong token scheme" })
		}

		const tokenData = jwt.verify(token, "secret", (error, data) => {
			if (error) {
				return response.sendStatus(401)
			}

			else {
				return data
			}
		})

		request.userId = "asD"

		return next()
	}
}