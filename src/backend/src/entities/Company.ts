import { BaseEntity } from "./BaseEntity"
import { Product } from "./Product"
import { ProductCategory } from "./ProductCategory"
import { User } from "./User"


export class Company extends BaseEntity {
	public name!: string
	public owner!: User
	public products?: Product[]
	public categories?: ProductCategory[]

	constructor(props: Omit<Company, "id" | "createdAt" | "updatedAt">, id?: string) {
		super(props, id)
	}
}