import { DTO } from "../../IDTO";


export interface ICreateUserRequestDTO extends DTO {
	name: string
	email: string
	password: string
}