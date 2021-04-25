"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCompanyController = void 0;
class GetCompanyController {
    constructor(getCompanyUseCase) {
        this.getCompanyUseCase = getCompanyUseCase;
    }
    async handle(request, response) {
        try {
            const users = await this.getCompanyUseCase.execute({ request });
            return response.status(200).send(users);
        }
        catch (error) {
            return response.status(400).send({
                error: error.message || "Unexpected Error."
            });
        }
    }
}
exports.GetCompanyController = GetCompanyController;
