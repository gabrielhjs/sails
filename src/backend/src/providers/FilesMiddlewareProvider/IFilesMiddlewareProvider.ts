import { Request, Response, NextFunction } from "express"


export interface IFilesMiddleware {
	handle(request: Request, response: Response): Function
}