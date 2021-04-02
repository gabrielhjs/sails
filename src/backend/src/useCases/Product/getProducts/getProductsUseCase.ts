import { Product } from "../../../entities/Product"
import { IProductRepository } from "../../../repositories/IProducts/IProductRepository"
import { IGetProductsRequestDTO } from "./getProductsDTO"

export class GetProductsUseCase {
	constructor(
		private repository: IProductRepository,
	) { }

	async execute(data: IGetProductsRequestDTO): Promise<Product[]> {

		return await this.repository.findByQuery(data.request)
	}
}