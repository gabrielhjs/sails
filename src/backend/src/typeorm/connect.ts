import { createConnection, getConnection } from 'typeorm'
import path from "path"


const connection = {
	async create() {
		await createConnection(process.env.NODE_ENV as string)
	},

	async close() {
		await getConnection().close()
	},

	async clear() {
		const connection = getConnection()
		const entities = connection.entityMetadatas

		entities.forEach(async (entity) => {
			const repository = connection.getRepository(entity.name)
			await repository.query(`DELETE FROM ${entity.tableName}`)
		})
	},
}

const testConnection = {
	async create() {
		const entities = path.join(__dirname, "./models/*.ts")
		const migrations = path.join(__dirname, "./migrations/*.ts")
		await createConnection({
			"name": "test",
			"type": "postgres",
			"url": "postgres://postgres:admin@localhost:5433/sails_test",
			"logging": false,
			"dropSchema": true,
			"entities": [entities],
			"migrations": [migrations],
			"cli": {
				"entitiesDir": "src/typeorm/models/entity",
				"migrationsDir": "src/typeorm/migrations"
			}
		})
	},
}


export { connection, testConnection }
