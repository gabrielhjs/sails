import dotenv from "dotenv"
import { Company } from "../../../entities/Company"
import { ICompanyRepository } from "../../../repositories/ICompanies/ICompanyRepository"
import { IUsersRepository } from "../../../repositories/IUsers/IUsersRepository"
import { ICreateCompanyRequestDTO } from "./CreateCompanyDTO"


dotenv.config()


export class CreateCompanyUseCase {
	constructor(
		private userRepository: IUsersRepository,
		private companyRepository: ICompanyRepository
	) { }

	async execute(data: ICreateCompanyRequestDTO) {
		const owner = await this.userRepository.find(data.ownerId)

		if (owner === undefined) { throw new Error("Invalid owner Id") }

		const company = new Company({
			name: data.name,
			owner
		})

		return await this.companyRepository.save(company)
	}
}