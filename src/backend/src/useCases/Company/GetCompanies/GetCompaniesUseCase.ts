import { ICompanyRepository } from "../../../repositories/ICompanies/ICompanyRepository";
import { IGetCompanyRequestDTO } from "./GetCompaniesDTO";

export class GetCompanyUseCase {
	constructor(
		private companyRepository: ICompanyRepository,
	) { }

	async execute(data: IGetCompanyRequestDTO) {
		return await this.companyRepository.findByQuery(data.request)
	}
}