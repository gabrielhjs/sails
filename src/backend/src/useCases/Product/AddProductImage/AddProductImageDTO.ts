import { DTO } from "../../IDTO"


export interface IAddProductImageRequestDTO extends DTO {
	productId: string
	url: string
	size: number
}