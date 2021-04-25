import { Request } from "express"
import { DTO } from "../../IDTO";


export interface IGetProductCategoryRequestDTO extends DTO {
	request: Request
}