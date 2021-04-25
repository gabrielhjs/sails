"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
const Product_1 = require("../../../entities/Product");
const ProductStock_1 = require("../../../entities/ProductStock");
class CreateProductUseCase {
    constructor(productRepository, productCategoryRepository, companyRepository) {
        this.productRepository = productRepository;
        this.productCategoryRepository = productCategoryRepository;
        this.companyRepository = companyRepository;
    }
    async execute(data) {
        const company = await this.companyRepository.find(data.companyId);
        const category = await this.productCategoryRepository.find(data.categoryId);
        if (company === undefined) {
            throw new Error("Invalid company Id");
        }
        if (category === undefined) {
            throw new Error("Invalid category Id");
        }
        const productStock = new ProductStock_1.ProductStock({
            quantity: 0
        });
        const product = new Product_1.Product({
            name: data.name,
            description: data.description,
            company: company,
            category: category,
            stock: productStock
        });
        return await this.productRepository.save(product);
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
