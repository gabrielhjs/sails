import dotenv from "dotenv"
import { getRepository } from "typeorm"
import { Request } from "express"
import { Company } from "../../../../entities/Company"
import { OrmCompany } from "../../../../typeorm/models/Company"
import { ICompanyRepository } from "../../../ICompanies/ICompanyRepository"
import { QueryBuilder } from "typeorm-express-query-builder"


dotenv.config()


export class TypeOrmCompanyRepository implements ICompanyRepository {
	async find(companyId: string): Promise<void | Company> {
		const repository = getRepository(OrmCompany, process.env.NODE_ENV)
		const company = await repository.findOne({ where: { id: companyId } })

		if (company === undefined) { return }
		else { return company }
	}

	async findByQuery(request: Request): Promise<Company[]> {
		const repository = getRepository(OrmCompany, process.env.NODE_ENV)
		const query = new QueryBuilder(request.query).build()
		query.relations = ["owner", "products", "products.stock"]
		query.cache = true

		return await repository.find(query)
	}

	async save(company: Company): Promise<Company> {
		const repository = getRepository(OrmCompany, process.env.NODE_ENV)
		const newCompany = repository.create(company)

		return await repository.save(newCompany)
	}

}