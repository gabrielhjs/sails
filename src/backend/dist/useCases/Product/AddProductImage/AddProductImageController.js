"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProductImageController = void 0;
class AddProductImageController {
    constructor(addProductImageUseCase) {
        this.addProductImageUseCase = addProductImageUseCase;
    }
    async handle(request, response) {
        const { filename, size } = request.file;
        const { productId } = request.body;
        try {
            await this.addProductImageUseCase.execute({
                productId,
                url: filename,
                size
            });
            return response.status(201).send();
        }
        catch (error) {
            return response.status(400).send({
                error: error.message || "Unexpected Error."
            });
        }
    }
}
exports.AddProductImageController = AddProductImageController;
