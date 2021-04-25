"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanyController = void 0;
class CreateCompanyController {
    constructor(createCompanyUseCase) {
        this.createCompanyUseCase = createCompanyUseCase;
    }
    async handle(request, response) {
        const { name, ownerId } = request.body;
        try {
            const newCompany = await this.createCompanyUseCase.execute({
                name,
                ownerId
            });
            return response.status(201).send(newCompany);
        }
        catch (error) {
            return response.status(400).send({
                error: error.message || "Unexpected Error."
            });
        }
    }
}
exports.CreateCompanyController = CreateCompanyController;
