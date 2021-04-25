import { DTO } from "../../IDTO";


export interface IAddProductRequestDTO extends DTO {
	productId: string
	amount: number
}