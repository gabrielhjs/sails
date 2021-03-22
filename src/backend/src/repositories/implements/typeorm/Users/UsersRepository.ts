import { getRepository } from "typeorm"
import { Request } from "express"
import { QueryBuilder } from "typeorm-express-query-builder"


import { User } from "../../../../entities/User"
import { OrmUser } from "../../../../typeorm/models/User"
import { IUsersRepository } from "../../../IUsers/IUsersRepository"


export class TypeormUsersRepository implements IUsersRepository {

	async save(user: User): Promise<void> {
		const repository = getRepository(OrmUser, process.env.NODE_ENV)
		const new_user = repository.create(user)
		await repository.save(new_user)
	}

	async findByEmail(email: string): Promise<User | void> {
		const repository = getRepository(OrmUser, process.env.NODE_ENV)
		const user = await repository.findOne({ where: { email } })

		if (user === undefined) {
			return
		}
		else {
			return new User(user)
		}
	}

	async findByQuery(request: Request): Promise<User[]> {
		const repository = getRepository(OrmUser, process.env.NODE_ENV)
		const query = new QueryBuilder(request.query).build()
		return await repository.find(query)
	}


}