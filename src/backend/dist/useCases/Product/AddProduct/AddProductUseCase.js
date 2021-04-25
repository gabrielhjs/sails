"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProductUseCase = void 0;
class AddProductUseCase {
    constructor(productRepository, productStockRepository) {
        this.productRepository = productRepository;
        this.productStockRepository = productStockRepository;
    }
    async execute(data) {
        const product = await this.productRepository.find(data.productId);
        if (product === undefined) {
            throw new Error("Invalid product Id");
        }
        return await this.productStockRepository.addAmount(product.stock, data.amount);
    }
}
exports.AddProductUseCase = AddProductUseCase;
