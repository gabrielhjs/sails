import { BaseEntity } from "./BaseEntity"
import { Product } from "./Product"
import { User } from "./User"


export class Company extends BaseEntity {
	public name!: string
	public owner!: User
	public products?: Product[]

	constructor(props: Omit<Company, "id" | "createdAt" | "updatedAt">, id?: string) {
		super(props, id)
	}
}