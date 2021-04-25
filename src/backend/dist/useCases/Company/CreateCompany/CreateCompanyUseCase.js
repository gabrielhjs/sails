"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanyUseCase = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const Company_1 = require("../../../entities/Company");
dotenv_1.default.config();
class CreateCompanyUseCase {
    constructor(userRepository, companyRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
    }
    async execute(data) {
        const owner = await this.userRepository.find(data.ownerId);
        if (owner === undefined) {
            throw new Error("Invalid owner Id");
        }
        const company = new Company_1.Company({
            name: data.name,
            owner
        });
        return await this.companyRepository.save(company);
    }
}
exports.CreateCompanyUseCase = CreateCompanyUseCase;
