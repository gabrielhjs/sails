import { BaseEntity } from "./BaseEntity"
import { Company } from "./Company"

export class User extends BaseEntity {
	public name!: string
	public email!: string
	public password!: string
	public companies?: Company[]

	constructor(props: Omit<User, "id" | "createdAt" | "updatedAt">, id?: string) {
		super(props, id)
		Object.assign(this, props)
	}
}