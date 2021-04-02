import { IProductStockRepository } from "../../../repositories/IProducts/IProductStockRepository"
import { IAddProductImageRequestDTO } from "./AddProductImageDTO"

export class AddProductImageUseCase {
	constructor(
		// private productStockRepository: IProductStockRepository,
	) { }

	async execute(data: IAddProductImageRequestDTO): Promise<void> {

	}
}