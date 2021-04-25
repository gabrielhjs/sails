import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { ProductStock } from "../../entities/ProductStock"

import { OrmProduct } from "./Product"


@Entity("product_stock")
export class OrmProductStock implements ProductStock {
	@PrimaryColumn("uuid")
	id!: string

	@Column("timestamp")
	createdAt!: Date

	@Column("timestamp")
	updatedAt!: Date

	@Column("integer")
	quantity!: number

	@OneToOne(() => OrmProduct, product => product.stock)
	product!: OrmProduct
}