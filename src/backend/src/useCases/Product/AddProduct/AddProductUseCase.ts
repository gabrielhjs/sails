import { IProductRepository } from "../../../repositories/IProducts/IProductRepository"
import { IProductStockRepository } from "../../../repositories/IProducts/IProductStockRepository"
import { IAddProductRequestDTO } from "./AddProductDTO"

export class AddProductUseCase {
	constructor(
		private productRepository: IProductRepository,
		private productStockRepository: IProductStockRepository
	) { }

	async execute(data: IAddProductRequestDTO): Promise<number> {
		const product = await this.productRepository.find(data.productId)

		if (product === undefined) { throw new Error("Invalid product Id") }

		return await this.productStockRepository.addAmount(product.stock, data.amount)
	}
}