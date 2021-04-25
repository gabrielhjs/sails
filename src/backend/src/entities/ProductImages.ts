import { BaseEntity } from "./BaseEntity"
import { Product } from "./Product"


export class ProductImage extends BaseEntity {
	public url!: string
	public size!: string
	public product!: Product

	constructor(props: Omit<ProductImage, "id" | "createdAt" | "updatedAt">, id?: string) {
		super(props, id)
	}
}