import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { Product } from "../../entities/Product"
import { ProductImage } from "../../entities/ProductImages"
import { OrmProduct } from "./Product"


@Entity("images")
export class OrmProductImage implements ProductImage {
	@PrimaryColumn("uuid")
	id!: string

	@Column("timestamp")
	createdAt!: Date

	@Column("timestamp")
	updatedAt!: Date

	@Column()
	size!: string

	@Column()
	url!: string

	@ManyToOne(() => OrmProduct, product => product.images, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
		cascade: true
	})
	@JoinColumn()
	product!: Product
}