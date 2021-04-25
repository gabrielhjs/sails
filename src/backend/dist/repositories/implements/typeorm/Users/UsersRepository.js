"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormUsersRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_express_query_builder_1 = require("typeorm-express-query-builder");
const User_1 = require("../../../../typeorm/models/User");
class TypeormUsersRepository {
    async find(userId) {
        const repository = typeorm_1.getRepository(User_1.OrmUser, process.env.NODE_ENV);
        const user = await repository.findOne({ where: { id: userId } });
        if (user === undefined) {
            return;
        }
        return user;
    }
    async save(user) {
        const repository = typeorm_1.getRepository(User_1.OrmUser, process.env.NODE_ENV);
        const newUser = repository.create(user);
        await repository.save(newUser);
        return newUser.id;
    }
    async findByEmail(email) {
        const repository = typeorm_1.getRepository(User_1.OrmUser, process.env.NODE_ENV);
        const user = await repository.findOne({
            where: { email }, select: [
                "id",
                "name",
                "email",
                "password",
                "createdAt",
                "updatedAt"
            ]
        });
        if (user === undefined) {
            return;
        }
        return user;
    }
    async findByQuery(request) {
        const repository = typeorm_1.getRepository(User_1.OrmUser, process.env.NODE_ENV);
        const query = new typeorm_express_query_builder_1.QueryBuilder(request.query).build();
        query.relations = ["companies"];
        query.cache = true;
        return await repository.find(query);
    }
}
exports.TypeormUsersRepository = TypeormUsersRepository;
