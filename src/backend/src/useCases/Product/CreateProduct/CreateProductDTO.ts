import { DTO } from "../../IDTO";

export interface ICreateProductRequestDTO extends DTO {
	name: string
	description?: string
	categoryId: string
	companyId: string
}