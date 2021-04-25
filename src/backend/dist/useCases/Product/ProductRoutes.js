"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const __1 = require("../..");
const AddProduct_1 = require("./AddProduct");
const AddProductImage_1 = require("./AddProductImage");
const CreateProduct_1 = require("./CreateProduct");
const CreateProductCategory_1 = require("./CreateProductCategory");
const GetProductCategory_1 = require("./GetProductCategory");
const GetProducts_1 = require("./GetProducts");
const SubProduct_1 = require("./SubProduct");
const productRouter = express_1.Router();
exports.productRouter = productRouter;
productRouter.post("/", __1.authMiddleware.handle, (request, response) => {
    return CreateProduct_1.createProductController.handle(request, response);
});
productRouter.get("/", __1.authMiddleware.handle, (request, response) => {
    return GetProducts_1.getProductController.handle(request, response);
});
productRouter.post("/add", __1.authMiddleware.handle, (request, response) => {
    return AddProduct_1.addProductController.handle(request, response);
});
productRouter.post("/sub", __1.authMiddleware.handle, (request, response) => {
    return SubProduct_1.subProductController.handle(request, response);
});
productRouter.post("/upload/image", __1.authMiddleware.handle, __1.imageMiddleware.single("file"), (request, response) => {
    return AddProductImage_1.addProductImageController.handle(request, response);
});
productRouter.post("/category", __1.authMiddleware.handle, (request, response) => {
    return CreateProductCategory_1.createProductCategoryController.handle(request, response);
});
productRouter.get("/category", __1.authMiddleware.handle, (request, response) => {
    return GetProductCategory_1.getProductCategoryController.handle(request, response);
});
