"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductCategoryController = void 0;
class GetProductCategoryController {
    constructor(getProductCategoryUseCase) {
        this.getProductCategoryUseCase = getProductCategoryUseCase;
    }
    async handle(request, response) {
        try {
            const categories = await this.getProductCategoryUseCase.execute({ request });
            return response.status(202).send(categories);
        }
        catch (error) {
            return response.status(400).send({
                error: error.message || "Unexpected Error."
            });
        }
    }
}
exports.GetProductCategoryController = GetProductCategoryController;
