import { Request } from "express"
import { DTO } from "../../IDTO";


export interface IGetProductsRequestDTO extends DTO {
	request: Request
}