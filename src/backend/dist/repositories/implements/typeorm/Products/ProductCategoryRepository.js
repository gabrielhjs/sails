"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormProductCategoryRepository = void 0;
const typeorm_1 = require("typeorm");
const ProductCategory_1 = require("../../../../typeorm/models/ProductCategory");
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_express_query_builder_1 = require("typeorm-express-query-builder");
dotenv_1.default.config();
class TypeormProductCategoryRepository {
    async save(productCategory) {
        const repository = typeorm_1.getRepository(ProductCategory_1.OrmProductCategory, process.env.NODE_ENV);
        const newProductCategory = repository.create(productCategory);
        return await repository.save(newProductCategory);
    }
    async find(productCategoryId) {
        const repository = typeorm_1.getRepository(ProductCategory_1.OrmProductCategory, process.env.NODE_ENV);
        const productCategory = await repository.findOne({ where: { id: productCategoryId } });
        if (productCategory === undefined) {
            return;
        }
        else {
            return productCategory;
        }
    }
    async findByQuery(request) {
        const repository = typeorm_1.getRepository(ProductCategory_1.OrmProductCategory, process.env.NODE_ENV);
        const query = new typeorm_express_query_builder_1.QueryBuilder(request.query).build();
        query.relations = ["company", "products"];
        return await repository.find(query);
    }
}
exports.TypeormProductCategoryRepository = TypeormProductCategoryRepository;
