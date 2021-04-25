import { ProductCategory } from "../../../entities/ProductCategory"
import { ICompanyRepository } from "../../../repositories/ICompanies/ICompanyRepository"
import { IProductCategoryRepository } from "../../../repositories/IProducts/IProductCategoryRepository"
import { UseCase } from "../../IUseCase"
import { ICreateProductCategoryRequestDTO } from "./CreateProductCategoryDTO"


export class CreateProductCategoryUseCase implements UseCase {
	constructor(
		private productCategoryRepository: IProductCategoryRepository,
		private companyRepository: ICompanyRepository
	) { }

	async execute(data: ICreateProductCategoryRequestDTO) {
		const company = await this.companyRepository.find(data.companyId)

		if (company === undefined) { throw new Error("Invalid company Id") }

		const productCategory = new ProductCategory({
			name: data.name,
			description: data.description,
			company: company
		})

		return await this.productCategoryRepository.save(productCategory)
	}
}