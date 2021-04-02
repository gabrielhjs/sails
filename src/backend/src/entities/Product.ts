import { BaseEntity } from "./BaseEntity"
import { ProductStock } from "./ProductStock"


export class Product extends BaseEntity {
	public name!: string
	public stock?: ProductStock

	constructor(props: Product, id?: string) {
		super(props, id)
	}
}