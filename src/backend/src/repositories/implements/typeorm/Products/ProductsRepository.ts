import dotenv from "dotenv"
import { Request } from "express"
import { getRepository } from "typeorm"
import { QueryBuilder } from "typeorm-express-query-builder"
import { Product } from "../../../../entities/Product"
import { ProductStock } from "../../../../entities/ProductStock"
import { OrmProduct } from "../../../../typeorm/models/Product"
import { OrmProductStock } from "../../../../typeorm/models/ProductStock"
import { IProductRepository } from "../../../IProducts/IProductRepository"


dotenv.config()


export class TypeormProductRepository implements IProductRepository {
	async save(product: Product): Promise<Product> {
		const productRepository = getRepository(OrmProduct, process.env.NODE_ENV)
		const productStockRepository = getRepository(OrmProductStock, process.env.NODE_ENV)

		const productStock = new ProductStock({
			quantity: 0,
			product: new Product(product)
		})

		product.stock = productStock

		const newProduct = productRepository.create(product)

		return await productRepository.save(newProduct)
	}

	async find(id: string): Promise<Product | void> {
		const repository = getRepository(OrmProduct, process.env.NODE_ENV)
		const product = await repository.findOne({ where: { id } })

		if (product === undefined) {
			return
		}
		else {
			return new Product(product)
		}
	}

	async findByQuery(request: Request): Promise<OrmProduct[]> {
		const repository = getRepository(OrmProduct, process.env.NODE_ENV)
		const query = new QueryBuilder(request.query).build()
		query.relations = ["stock"]
		return await repository.find(query)
	}
}