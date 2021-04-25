"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductCategoryUseCase = void 0;
const ProductCategory_1 = require("../../../entities/ProductCategory");
class CreateProductCategoryUseCase {
    constructor(productCategoryRepository, companyRepository) {
        this.productCategoryRepository = productCategoryRepository;
        this.companyRepository = companyRepository;
    }
    async execute(data) {
        const company = await this.companyRepository.find(data.companyId);
        if (company === undefined) {
            throw new Error("Invalid company Id");
        }
        const productCategory = new ProductCategory_1.ProductCategory({
            name: data.name,
            description: data.description,
            company: company
        });
        return await this.productCategoryRepository.save(productCategory);
    }
}
exports.CreateProductCategoryUseCase = CreateProductCategoryUseCase;
