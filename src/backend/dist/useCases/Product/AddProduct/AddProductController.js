"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProductController = void 0;
class AddProductController {
    constructor(addUserUseCase) {
        this.addUserUseCase = addUserUseCase;
    }
    async handle(request, response) {
        const { productId, amount } = request.body;
        try {
            const quantity = await this.addUserUseCase.execute({
                productId,
                amount
            });
            return response.status(202).send({ updatedStock: quantity });
        }
        catch (error) {
            return response.status(400).send({
                error: error.message || "Unexpected Error."
            });
        }
    }
}
exports.AddProductController = AddProductController;
