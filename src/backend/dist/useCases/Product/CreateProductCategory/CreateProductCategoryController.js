"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductCategoryController = void 0;
class CreateProductCategoryController {
    constructor(createProductCategoryUseCase) {
        this.createProductCategoryUseCase = createProductCategoryUseCase;
    }
    async handle(request, response) {
        const { name, description, productId, companyId } = request.body;
        try {
            const newProductCategory = await this.createProductCategoryUseCase.execute({
                name,
                description,
                companyId
            });
            return response.status(201).send(newProductCategory);
        }
        catch (error) {
            return response.status(400).send({
                error: error.message || "Unexpected Error."
            });
        }
    }
}
exports.CreateProductCategoryController = CreateProductCategoryController;
