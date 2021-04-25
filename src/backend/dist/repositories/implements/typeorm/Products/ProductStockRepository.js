"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormProductStockRepository = void 0;
const typeorm_1 = require("typeorm");
const ProductStock_1 = require("../../../../typeorm/models/ProductStock");
const dotenv_1 = __importDefault(require("dotenv"));
const ProductStock_2 = require("../../../../entities/ProductStock");
dotenv_1.default.config();
class TypeormProductStockRepository {
    async save(productStock) {
        const repository = typeorm_1.getRepository(ProductStock_1.OrmProductStock, process.env.NODE_ENV);
        const newProductStock = repository.create(productStock);
        await repository.save(newProductStock);
    }
    async find(productId) {
        const repository = typeorm_1.getRepository(ProductStock_1.OrmProductStock, process.env.NODE_ENV);
        const productStock = await repository.findOne({ where: { product: productId } });
        if (productStock === undefined) {
            return;
        }
        else {
            return productStock;
        }
    }
    async addAmount(productStock, amount) {
        const productStockRepository = typeorm_1.getRepository(ProductStock_1.OrmProductStock, process.env.NODE_ENV);
        productStock.quantity += amount;
        await productStockRepository.save(new ProductStock_2.ProductStock(productStock, productStock.id));
        return productStock.quantity;
    }
    async subAmount(productStock, amount) {
        const repository = typeorm_1.getRepository(ProductStock_1.OrmProductStock, process.env.NODE_ENV);
        if ((productStock.quantity - amount) < 0) {
            throw new Error("This quantity of product is not available in stock.");
        }
        productStock.quantity -= amount;
        await repository.save(new ProductStock_2.ProductStock(productStock, productStock.id));
        return productStock.quantity;
    }
}
exports.TypeormProductStockRepository = TypeormProductStockRepository;
