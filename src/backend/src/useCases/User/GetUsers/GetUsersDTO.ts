import { Request } from "express"
import { DTO } from "../../IDTO";


export interface IGetUserRequestDTO extends DTO {
	request: Request
}