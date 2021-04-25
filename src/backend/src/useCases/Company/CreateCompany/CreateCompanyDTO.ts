import { DTO } from "../../IDTO";

export interface ICreateCompanyRequestDTO extends DTO {
	name: string,
	ownerId: string
}