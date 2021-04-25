"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormProductRepository = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const typeorm_express_query_builder_1 = require("typeorm-express-query-builder");
const Product_1 = require("../../../../typeorm/models/Product");
dotenv_1.default.config();
class TypeormProductRepository {
    async save(product) {
        const productRepository = typeorm_1.getRepository(Product_1.OrmProduct, process.env.NODE_ENV);
        const newProduct = productRepository.create(product);
        return await productRepository.save(newProduct);
    }
    async find(productId) {
        const repository = typeorm_1.getRepository(Product_1.OrmProduct, process.env.NODE_ENV);
        const product = await repository.findOne({ where: { id: productId }, relations: ["stock"] });
        if (product === undefined) {
            return;
        }
        return product;
    }
    async findByQuery(request) {
        const repository = typeorm_1.getRepository(Product_1.OrmProduct, process.env.NODE_ENV);
        const query = new typeorm_express_query_builder_1.QueryBuilder(request.query).build();
        query.relations = ["stock", "images", "category"];
        return await repository.find(query);
    }
}
exports.TypeormProductRepository = TypeormProductRepository;
