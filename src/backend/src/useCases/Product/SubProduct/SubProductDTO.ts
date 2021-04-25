import { DTO } from "../../IDTO";


export interface ISubProductRequestDTO extends DTO {
	productId: string
	amount: number
}