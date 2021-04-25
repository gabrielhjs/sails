"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductCategoryUseCase = exports.getProductCategoryController = void 0;
const ProductCategoryRepository_1 = require("../../../repositories/implements/typeorm/Products/ProductCategoryRepository");
const GetProductCategoryController_1 = require("./GetProductCategoryController");
const GetProductCategoryUseCase_1 = require("./GetProductCategoryUseCase");
const productCategoryRepository = new ProductCategoryRepository_1.TypeormProductCategoryRepository;
const getProductCategoryUseCase = new GetProductCategoryUseCase_1.GetProductCategoryUseCase(productCategoryRepository);
exports.getProductCategoryUseCase = getProductCategoryUseCase;
const getProductCategoryController = new GetProductCategoryController_1.GetProductCategoryController(getProductCategoryUseCase);
exports.getProductCategoryController = getProductCategoryController;