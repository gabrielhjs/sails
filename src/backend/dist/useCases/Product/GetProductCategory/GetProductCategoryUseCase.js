"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductCategoryUseCase = void 0;
class GetProductCategoryUseCase {
    constructor(productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }
    async execute(data) {
        return await this.productCategoryRepository.findByQuery(data.request);
    }
}
exports.GetProductCategoryUseCase = GetProductCategoryUseCase;
