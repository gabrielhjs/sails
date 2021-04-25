"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(request, response) {
        const { name, email, password } = request.body;
        try {
            const jwt = await this.createUserUseCase.execute({
                name,
                email,
                password
            });
            return response.status(201).send({
                token: jwt
            });
        }
        catch (error) {
            return response.status(400).send({
                error: error.message || "Unexpected Error."
            });
        }
    }
}
exports.CreateUserController = CreateUserController;
