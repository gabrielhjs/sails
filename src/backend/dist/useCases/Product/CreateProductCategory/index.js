"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductCategoryUseCase = exports.createProductCategoryController = void 0;
const CompaniesRepository_1 = require("../../../repositories/implements/typeorm/Company/CompaniesRepository");
const ProductCategoryRepository_1 = require("../../../repositories/implements/typeorm/Products/ProductCategoryRepository");
const CreateProductCategoryController_1 = require("./CreateProductCategoryController");
const CreateProductCategoryUseCase_1 = require("./CreateProductCategoryUseCase");
const productCategoryRepository = new ProductCategoryRepository_1.TypeormProductCategoryRepository;
const companyRepository = new CompaniesRepository_1.TypeOrmCompanyRepository;
const createProductCategoryUseCase = new CreateProductCategoryUseCase_1.CreateProductCategoryUseCase(productCategoryRepository, companyRepository);
exports.createProductCategoryUseCase = createProductCategoryUseCase;
const createProductCategoryController = new CreateProductCategoryController_1.CreateProductCategoryController(createProductCategoryUseCase);
exports.createProductCategoryController = createProductCategoryController;