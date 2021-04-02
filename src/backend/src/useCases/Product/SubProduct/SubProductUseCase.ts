import { IProductStockRepository } from "../../../repositories/IProducts/IProductStockRepository"
import { ISubProductRequestDTO } from "./SubProductDTO"

export class SubProductUseCase {
	constructor(
		private productStockRepository: IProductStockRepository,
	) { }

	async execute(data: ISubProductRequestDTO): Promise<number> {

		const productStock = await this.productStockRepository.find(data.productId)

		if (!productStock) {
			throw new Error("This product dont have stock")
		}
		else {
			return await this.productStockRepository.subAmount(data.productId, data.amount)
		}
	}
}