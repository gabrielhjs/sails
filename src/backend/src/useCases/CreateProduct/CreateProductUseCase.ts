import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProducts/IProductRepository";
import { ICreateProductRequestDTO } from "./CreateProductDTO";

export class CreateProductUseCase {
	constructor(
		private userRepository: IProductRepository,
	) { }

	async execute(data: ICreateProductRequestDTO) {
		const product = new Product(data)
		await this.userRepository.save(product)
	}
}