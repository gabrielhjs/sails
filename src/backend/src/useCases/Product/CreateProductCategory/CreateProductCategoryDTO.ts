import { DTO } from "../../IDTO";


export interface ICreateProductCategoryRequestDTO extends DTO {
	name: string,
	description?: string
	companyId: string
}