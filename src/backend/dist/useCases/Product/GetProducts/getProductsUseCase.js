"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductsUseCase = void 0;
class GetProductsUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        return await this.repository.findByQuery(data.request);
    }
}
exports.GetProductsUseCase = GetProductsUseCase;
