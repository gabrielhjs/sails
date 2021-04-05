import { BaseEntity } from "./BaseEntity"
import { Product } from "./Product"

export class ProductStock extends BaseEntity {
	public quantity!: number
	public product?: Product

	constructor(props: Omit<ProductStock, "id" | "createdAt" | "updatedAt">, id?: string) {
		super(props, id)
	}
}