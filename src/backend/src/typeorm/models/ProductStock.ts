import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Product } from "../../entities/Product"

import { OrmProduct } from "./Product"


@Entity("product_stock")
export class OrmProductStock {
	@PrimaryColumn("uuid")
	id!: string

	@Column("date")
	createdAt!: Date

	@Column("date")
	updatedAt!: Date

	@Column("integer")
	quantity!: number

	@OneToOne(type => OrmProduct, (product: OrmProduct) => product.stock)
	@JoinColumn()
	product!: OrmProduct
}