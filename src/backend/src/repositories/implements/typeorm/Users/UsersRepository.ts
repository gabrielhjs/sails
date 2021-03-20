import { getRepository } from "typeorm"
import { User } from "../../../../entities/User"
import { OrmUser } from "../../../../typeorm/models/User"
import { IUsersRepository } from "../../../IUsers/IUsersRepository"
import dotenv from "dotenv"


dotenv.config()


export class TypeormUsersRepository implements IUsersRepository {

	async save(user: User): Promise<void> {
		const repository = getRepository(OrmUser)
		const new_user = repository.create(user)
		await repository.save(new_user)
	}

	async findByEmail(email: string): Promise<User | void> {
		const repository = getRepository(OrmUser)
		const user = await repository.findOne({ where: { email } })

		if (user === undefined) {
			return
		}
		else {
			return new User(user)
		}
	}

}