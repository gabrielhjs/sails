import dotenv from "dotenv"
import { getRepository } from "typeorm"
import { Product } from "../../../../entities/Product"
import { ProductStock } from "../../../../entities/ProductStock"
import { OrmProduct } from "../../../../typeorm/models/Product"
import { OrmProductStock } from "../../../../typeorm/models/ProductStock"
import { IProductRepository } from "../../../IProducts/IProductRepository"


dotenv.config()


export class TypeormProductRepository implements IProductRepository {
	async save(product: Product): Promise<void> {
		const productRepository = getRepository(OrmProduct)
		const productStockRepository = getRepository(OrmProductStock)

		const productStock = new ProductStock({
			quantity: 0,
			product: product
		})

		const newProduct = productRepository.create(product)
		const newProductStock = productStockRepository.create(productStock)
		await productRepository.save(newProduct)
		await productStockRepository.save(newProductStock)
	}

	async find(id: string): Promise<Product | void> {
		const repository = getRepository(OrmProduct)
		const product = await repository.findOne({ where: { id } })

		if (product === undefined) {
			return
		}
		else {
			return new Product(product)
		}
	}
}