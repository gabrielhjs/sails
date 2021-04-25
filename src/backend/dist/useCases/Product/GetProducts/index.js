"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductUseCase = exports.getProductController = void 0;
const ProductsRepository_1 = require("../../../repositories/implements/typeorm/Products/ProductsRepository");
const getProductsController_1 = require("./getProductsController");
const getProductsUseCase_1 = require("./getProductsUseCase");
const productRepository = new ProductsRepository_1.TypeormProductRepository;
const getProductUseCase = new getProductsUseCase_1.GetProductsUseCase(productRepository);
exports.getProductUseCase = getProductUseCase;
const getProductController = new getProductsController_1.GetProductController(getProductUseCase);
exports.getProductController = getProductController;