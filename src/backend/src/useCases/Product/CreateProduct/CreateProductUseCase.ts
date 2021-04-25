import { Product } from "../../../entities/Product"
import { ProductStock } from "../../../entities/ProductStock"
import { ICompanyRepository } from "../../../repositories/ICompanies/ICompanyRepository"
import { IProductCategoryRepository } from "../../../repositories/IProducts/IProductCategoryRepository"
import { IProductRepository } from "../../../repositories/IProducts/IProductRepository"
import { UseCase } from "../../IUseCase"
import { ICreateProductRequestDTO } from "./CreateProductDTO"


export class CreateProductUseCase implements UseCase {
	constructor(
		private productRepository: IProductRepository,
		private productCategoryRepository: IProductCategoryRepository,
		private companyRepository: ICompanyRepository,
	) { }

	async execute(data: ICreateProductRequestDTO) {
		const company = await this.companyRepository.find(data.companyId)
		const category = await this.productCategoryRepository.find(data.categoryId)

		if (company === undefined) { throw new Error("Invalid company Id") }
		if (category === undefined) { throw new Error("Invalid category Id") }

		const productStock = new ProductStock({
			quantity: 0
		})


		const product = new Product({
			name: data.name,
			description: data.description,
			company: company,
			category: category,
			stock: productStock
		})

		return await this.productRepository.save(product)
	}
}