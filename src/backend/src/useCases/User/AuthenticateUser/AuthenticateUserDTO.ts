import { DTO } from "../../IDTO";


export interface IAuthenticateUserDTO extends DTO {
	email: string
	password: string
}