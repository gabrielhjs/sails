import { BaseEntity } from "./BaseEntity"

export class User extends BaseEntity {
	public name!: string
	public email!: string
	public password!: string

	constructor(props: Omit<User, "id" | "createdAt" | "updatedAt">, id?: string) {
		super(id)
		Object.assign(this, props)
	}
}