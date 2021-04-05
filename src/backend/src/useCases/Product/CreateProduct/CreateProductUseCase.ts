import dotenv from "dotenv"
import { getRepository } from "typeorm"
import { Company } from "../../../entities/Company"
import { Product } from "../../../entities/Product"
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

		const product = new Product({
			name: data.name,
			company: company
		})

		return await this.productRepository.save(product)
	}
}