"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = void 0;
const express_1 = require("express");
const __1 = require("../..");
const CreateCompany_1 = require("./CreateCompany");
const GetCompanies_1 = require("./GetCompanies");
const companyRouter = express_1.Router();
exports.companyRouter = companyRouter;
companyRouter.post("/", __1.authMiddleware.handle, (request, response) => {
    return CreateCompany_1.createCompanyController.handle(request, response);
});
companyRouter.get("/", __1.authMiddleware.handle, (request, response) => {
    return GetCompanies_1.getCompanyController.handle(request, response);
});
