import { Product } from "../../../entities/Product"
import { IProductRepository } from "../../../repositories/IProducts/IProductRepository"
import { UseCase } from "../../IUseCase"
import { IGetProductsRequestDTO } from "./getProductsDTO"


export class GetProductsUseCase implements UseCase {
	constructor(
		private repository: IProductRepository,
	) { }

	async execute(data: IGetProductsRequestDTO): Promise<Product[]> {

		return await this.repository.findByQuery(data.request)
	}
}