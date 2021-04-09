import { BaseEntity } from "./BaseEntity"
import { Company } from "./Company"
import { ProductStock } from "./ProductStock"


export class Product extends BaseEntity {
	public name!: string
	public company!: Company
	public description?: string
	public stock!: ProductStock

	constructor(props: Omit<Product, "id" | "createdAt" | "updatedAt">, id?: string) {
		super(props, id)
	}
}