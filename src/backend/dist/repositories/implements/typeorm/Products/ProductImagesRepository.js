"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormProductImageRepository = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const typeorm_express_query_builder_1 = require("typeorm-express-query-builder");
const ProductImages_1 = require("../../../../typeorm/models/ProductImages");
dotenv_1.default.config();
class TypeormProductImageRepository {
    async save(productImage) {
        const repository = typeorm_1.getRepository(ProductImages_1.OrmProductImage, process.env.NODE_ENV);
        const newProductImage = repository.create(productImage);
        return await repository.save(newProductImage);
    }
    async findByQuery(request) {
        const repository = typeorm_1.getRepository(ProductImages_1.OrmProductImage, process.env.NODE_ENV);
        const query = new typeorm_express_query_builder_1.QueryBuilder(request.query).build();
        query.relations = ["product"];
        return await repository.find(query);
    }
}
exports.TypeormProductImageRepository = TypeormProductImageRepository;
