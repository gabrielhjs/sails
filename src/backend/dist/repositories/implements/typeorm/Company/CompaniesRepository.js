"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmCompanyRepository = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const Company_1 = require("../../../../typeorm/models/Company");
const typeorm_express_query_builder_1 = require("typeorm-express-query-builder");
dotenv_1.default.config();
class TypeOrmCompanyRepository {
    async find(companyId) {
        const repository = typeorm_1.getRepository(Company_1.OrmCompany, process.env.NODE_ENV);
        const company = await repository.findOne({ where: { id: companyId } });
        if (company === undefined) {
            return;
        }
        else {
            return company;
        }
    }
    async findByQuery(request) {
        const repository = typeorm_1.getRepository(Company_1.OrmCompany, process.env.NODE_ENV);
        const query = new typeorm_express_query_builder_1.QueryBuilder(request.query).build();
        query.relations = ["owner", "products", "products.stock", "categories"];
        query.cache = true;
        return await repository.find(query);
    }
    async save(company) {
        const repository = typeorm_1.getRepository(Company_1.OrmCompany, process.env.NODE_ENV);
        const newCompany = repository.create(company);
        return await repository.save(newCompany);
    }
}
exports.TypeOrmCompanyRepository = TypeOrmCompanyRepository;
