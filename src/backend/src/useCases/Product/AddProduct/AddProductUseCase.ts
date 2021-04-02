import { IProductStockRepository } from "../../../repositories/IProducts/IProductStockRepository"
import { IAddProductRequestDTO } from "./AddProductDTO"

export class AddProductUseCase {
	constructor(
		private productStockRepository: IProductStockRepository,
	) { }

	async execute(data: IAddProductRequestDTO): Promise<number> {

		const productStock = await this.productStockRepository.find(data.productId)

		if (!productStock) {
			throw new Error("This product dont have stock")
		}
		else {
			return await this.productStockRepository.addAmount(data.productId, data.amount)
		}
	}
}