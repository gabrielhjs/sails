"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubProductController = void 0;
class SubProductController {
    constructor(subUserUseCase) {
        this.subUserUseCase = subUserUseCase;
    }
    async handle(request, response) {
        const { productId, amount } = request.body;
        try {
            const quantity = await this.subUserUseCase.execute({
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
exports.SubProductController = SubProductController;
