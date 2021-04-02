import { BaseEntity } from "./BaseEntity"
import { Product } from "./Product"

export class ProductStock extends BaseEntity {
	public quantity!: number
	public product?: Product

	constructor(props: ProductStock, id?: string) {
		super(props, id)
	}
}