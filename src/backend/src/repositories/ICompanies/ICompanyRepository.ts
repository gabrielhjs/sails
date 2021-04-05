import { Request } from "express"
import { Company } from "../../entities/Company"


export interface ICompanyRepository {
	find(companyId: string): Promise<Company | void>
	findByQuery(request: Request): Promise<Company[]>
	save(company: Company): Promise<Company>
}