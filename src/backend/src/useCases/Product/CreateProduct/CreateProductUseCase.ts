import dotenv from "dotenv"
import { getRepository } from "typeorm"
import { Company } from "../../../entities/Company"
import { Product } from "../../../entities/Product"
import { ProductStock } from "../../../entities/ProductStock"
import { ICompanyRepository } from "../../../repositories/ICompanies/ICompanyRepository"
import { TypeOrmCompanyRepository } from "../../../repositories/implements/typeorm/Company/CompaniesRepository"
import { IProductRepository } from "../../../repositories/IProducts/IProductRepository"
import { OrmCompany } from "../../../typeorm/models/Company"
import { ICreateProductRequestDTO } from "./CreateProductDTO"


dotenv.config()


export class CreateProductUseCase {
	constructor(
		private productRepository: IProductRepository,
		private companyRepository: ICompanyRepository
	) { }

	async execute(data: ICreateProductRequestDTO) {
		const company = await this.companyRepository.find(data.companyId)

		if (company === undefined) { throw new Error("Invalid company Id") }

		const productStock = new ProductStock({
			quantity: 0
		})

		const product = new Product({
			name: data.name,
			description: data.description,
			company: company,
			stock: productStock
		})

		return await this.productRepository.save(product)
	}
}