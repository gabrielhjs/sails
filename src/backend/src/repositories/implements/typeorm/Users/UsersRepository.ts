import { getRepository } from "typeorm"
import { Request } from "express"
import { QueryBuilder } from "typeorm-express-query-builder"


import { User } from "../../../../entities/User"
import { OrmUser } from "../../../../typeorm/models/User"
import { IUsersRepository } from "../../../IUsers/IUsersRepository"


export class TypeormUsersRepository implements IUsersRepository {
	async find(userId: string): Promise<User | void> {
		const repository = getRepository(OrmUser, process.env.NODE_ENV)
		const user = await repository.findOne({ where: { id: userId } })

		if (user === undefined) { return }
		return user
	}

	async save(user: User): Promise<string> {
		const repository = getRepository(OrmUser, process.env.NODE_ENV)
		const newUser = repository.create(user)
		await repository.save(newUser)

		return newUser.id
	}

	async findByEmail(email: string): Promise<User | void> {
		const repository = getRepository(OrmUser, process.env.NODE_ENV)
		const user = await repository.findOne(
			{
				where: { email }, select: [
					"id",
					"name",
					"email",
					"password",
					"createdAt",
					"updatedAt"
				]
			}
		)

		if (user === undefined) { return }
		return user
	}

	async findByQuery(request: Request): Promise<User[]> {
		const repository = getRepository(OrmUser, process.env.NODE_ENV)
		const query = new QueryBuilder(request.query).build()
		query.relations = ["companies"]
		return await repository.find(query)
	}


}