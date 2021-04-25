import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { Product } from "../../entities/Product"
import { ProductCategory } from "../../entities/ProductCategory"
import { ProductImage } from "../../entities/ProductImages"
import { OrmCompany } from "./Company"
import { OrmProductCategory } from "./ProductCategory"
import { OrmProductImage } from "./ProductImages"
import { OrmProductStock } from "./ProductStock"


@Entity("products")
export class OrmProduct implements Product {
	@PrimaryColumn("uuid")
	id!: string

	@Column("timestamp")
	createdAt!: Date

	@Column("timestamp")
	updatedAt!: Date

	@Column()
	name!: string

	@Column({ nullable: true })
	description?: string

	@ManyToOne(() => OrmCompany, company => company.products)
	@JoinColumn()
	company!: OrmCompany

	@OneToOne(() => OrmProductStock, stock => stock.product, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
		cascade: true
	})
	@JoinColumn()
	stock!: OrmProductStock

	@ManyToOne(() => OrmProductCategory, category => category.products, {
		onDelete: "RESTRICT",
		onUpdate: "CASCADE",
		cascade: true
	})
	@JoinColumn()
	category!: ProductCategory

	@OneToMany(() => OrmProductImage, image => image.product)
	images?: ProductImage[]
}