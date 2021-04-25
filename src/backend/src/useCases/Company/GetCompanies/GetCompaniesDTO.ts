import { Request } from "express"
import { DTO } from "../../IDTO";


export interface IGetCompanyRequestDTO extends DTO {
	request: Request
}