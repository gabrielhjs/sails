"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompanyUseCase = exports.getCompanyController = void 0;
const CompaniesRepository_1 = require("../../../repositories/implements/typeorm/Company/CompaniesRepository");
const GetCompaniesController_1 = require("./GetCompaniesController");
const GetCompaniesUseCase_1 = require("./GetCompaniesUseCase");
const companysRepository = new CompaniesRepository_1.TypeOrmCompanyRepository;
const getCompanyUseCase = new GetCompaniesUseCase_1.GetCompanyUseCase(companysRepository);
exports.getCompanyUseCase = getCompanyUseCase;
const getCompanyController = new GetCompaniesController_1.GetCompanyController(getCompanyUseCase);
exports.getCompanyController = getCompanyController;
