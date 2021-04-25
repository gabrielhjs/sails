import { IProductCategoryRepository } from "../../../repositories/IProducts/IProductCategoryRepository"
import { UseCase } from "../../IUseCase"
import { IGetProductCategoryRequestDTO } from "./GetProductCategoryDTO"


export class GetProductCategoryUseCase implements UseCase {
	constructor(
		private productCategoryRepository: IProductCategoryRepository,
	) { }

	async execute(data: IGetProductCategoryRequestDTO) {

		return await this.productCategoryRepository.findByQuery(data.request)
	}
}