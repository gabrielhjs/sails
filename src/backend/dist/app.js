"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const routes_1 = require("./routes");
const UserRoutes_1 = require("./useCases/User/UserRoutes");
const ProductRoutes_1 = require("./useCases/Product/ProductRoutes");
const CompanyRoutes_1 = require("./useCases/Company/CompanyRoutes");
const app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(compression_1.default({
    filter: (request, response) => {
        if (request.headers['x-no-compression']) {
            return false;
        }
        return compression_1.default.filter(request, response);
    }
}));
app.use(routes_1.router);
app.use("/user", UserRoutes_1.userRouter);
app.use("/product", ProductRoutes_1.productRouter);
app.use("/company", CompanyRoutes_1.companyRouter);
