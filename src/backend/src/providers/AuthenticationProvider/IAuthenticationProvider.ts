import { Request, Response, NextFunction } from "express";

export interface IAuthenticationProvider {
	getHashPassword(password: string): Promise<string>
	comparePassword(password: string, passwordHash: string): Promise<boolean>
	getJwt(user_email: string): Promise<string>
}

export interface IAuthenticationMiddleware {
	auth(request: Request, response: Response, next: NextFunction): Promise<Response | void>
}