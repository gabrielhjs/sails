import { BaseEntity } from "./BaseEntity"
import { Company } from "./Company"
import { ProductCategory } from "./ProductCategory"
import { ProductImage } from "./ProductImages"
import { ProductStock } from "./ProductStock"


export class Product extends BaseEntity {
	public name!: string
	public description?: string
	public company!: Company
	public category!: ProductCategory
	public stock!: ProductStock
	public images?: ProductImage[]

	constructor(props: Omit<Product, "id" | "createdAt" | "updatedAt">, id?: string) {
		super(props, id)
	}
}