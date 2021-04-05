import { IProductRepository } from "../../../repositories/IProducts/IProductRepository"
import { IProductStockRepository } from "../../../repositories/IProducts/IProductStockRepository"
import { ISubProductRequestDTO } from "./SubProductDTO"

export class SubProductUseCase {
	constructor(
		private productRepository: IProductRepository,
		private productStockRepository: IProductStockRepository
	) { }

	async execute(data: ISubProductRequestDTO): Promise<number> {
		const product = await this.productRepository.find(data.productId)

		if (product === undefined) { throw new Error("Invalid product Id") }

		return await this.productStockRepository.subAmount(product.stock, data.amount)
	}
}