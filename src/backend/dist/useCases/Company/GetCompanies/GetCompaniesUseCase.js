"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCompanyUseCase = void 0;
class GetCompanyUseCase {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async execute(data) {
        return await this.companyRepository.findByQuery(data.request);
    }
}
exports.GetCompanyUseCase = GetCompanyUseCase;
