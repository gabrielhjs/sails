import { BaseEntity } from "./BaseEntity"
import { Company } from "./Company"


export class ProductCategory extends BaseEntity {
	public name!: string
	public company!: Company
	public description?: string

	constructor(props: Omit<ProductCategory, "id" | "createdAt" | "updatedAt">, id?: string) {
		super(props, id)
	}
}