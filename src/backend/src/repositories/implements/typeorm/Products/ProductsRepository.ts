import dotenv from "dotenv"
import { getRepository } from "typeorm"
import { Product } from "../../../../entities/Product"
import { OrmProduct } from "../../../../typeorm/models/Product"
import { IProductRepository } from "../../../IProducts/IProductRepository"


dotenv.config()


export class TypeormProductRepository implements IProductRepository {
	async save(productStock: Product): Promise<void> {
		const repository = getRepository(OrmProduct)
		const newProductStock = repository.create(productStock)
		await repository.save(newProductStock)
	}
	async find(productId: string): Promise<Product | void> {
		const repository = getRepository(OrmProduct)
		const productStock = await repository.findOne({ where: { product: productId } })

		if (productStock === undefined) {
			return
		}
		else {
			return new Product(productStock)
		}
	}
}