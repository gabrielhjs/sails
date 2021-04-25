"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const connection = {
    async create(connectionName) {
        await typeorm_1.createConnection(connectionName);
    },
    async close(connectionName) {
        await typeorm_1.getConnection(connectionName).close();
    },
    async clear(connectionName) {
        const connection = typeorm_1.getConnection(connectionName);
        const entities = connection.entityMetadatas;
        entities.forEach(async (entity) => {
            const repository = connection.getRepository(entity.name);
            await repository.query(`DELETE FROM ${entity.tableName}`);
        });
    },
};
exports.connection = connection;
