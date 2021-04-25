import { Company } from "../../../entities/Company";
import { ICompanyRepository } from "../../../repositories/ICompanies/ICompanyRepository";
import { UseCase } from "../../IUseCase";
import { IGetCompanyRequestDTO } from "./GetCompaniesDTO";


export class GetCompanyUseCase implements UseCase {
	constructor(
		private companyRepository: ICompanyRepository,
	) { }

	async execute(data: IGetCompanyRequestDTO): Promise<Company[]> {
		return await this.companyRepository.findByQuery(data.request)
	}
}