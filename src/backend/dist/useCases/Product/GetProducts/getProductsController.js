"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductController = void 0;
class GetProductController {
    constructor(getProductsUseCase) {
        this.getProductsUseCase = getProductsUseCase;
    }
    async handle(request, response) {
        try {
            const products = await this.getProductsUseCase.execute({ request });
            return response.status(200).send(products);
        }
        catch (error) {
            return response.status(400).send({
                error: error.message || "Unexpected Error."
            });
        }
    }
}
exports.GetProductController = GetProductController;
