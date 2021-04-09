import { createConnection, getConnection } from 'typeorm'


const connection = {
	async create(connectionName: string) {
		await createConnection(connectionName)
	},

	async close(connectionName: string) {
		await getConnection(connectionName).close()
	},

	async clear(connectionName: string) {
		const connection = getConnection(connectionName)
		const entities = connection.entityMetadatas

		entities.forEach(async (entity) => {
			const repository = connection.getRepository(entity.name)
			await repository.query(`DELETE FROM ${entity.tableName}`)
		})
	},
}


export { connection }
