"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserController = void 0;
class GetUserController {
    constructor(getUserUseCase) {
        this.getUserUseCase = getUserUseCase;
    }
    async handle(request, response) {
        try {
            const users = await this.getUserUseCase.execute({ request });
            return response.status(200).send(users);
        }
        catch (error) {
            return response.status(400).send({
                error: error.message || "Unexpected Error."
            });
        }
    }
}
exports.GetUserController = GetUserController;
