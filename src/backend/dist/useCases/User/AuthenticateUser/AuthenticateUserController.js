"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
class AuthenticateUserController {
    constructor(authenticateUserUseCase) {
        this.authenticateUserUseCase = authenticateUserUseCase;
    }
    async handle(request, response) {
        const { email, password } = request.body;
        try {
            const jwt = await this.authenticateUserUseCase.execute({
                email,
                password
            });
            return response.status(200).send({
                token: jwt
            });
        }
        catch (error) {
            return response.status(200).send({
                error: error.message || "Unexpected Error."
            });
        }
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
