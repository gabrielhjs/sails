"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
class CreateProductController {
    constructor(createProductUseCase) {
        this.createProductUseCase = createProductUseCase;
    }
    async handle(request, response) {
        const { name, description, categoryId, companyId } = request.body;
        try {
            const newProduct = await this.createProductUseCase.execute({
                name,
                description,
                categoryId,
                companyId
            });
            return response.status(201).send(newProduct);
        }
        catch (error) {
            return response.status(400).send({
                error: error.message || "Unexpected Error."
            });
        }
    }
}
exports.CreateProductController = CreateProductController;
