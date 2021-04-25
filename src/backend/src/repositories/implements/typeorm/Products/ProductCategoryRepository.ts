import { Request } from "express"
import { getRepository } from "typeorm"
import { OrmProductCategory } from "../../../../typeorm/models/ProductCategory"
import dotenv from "dotenv"
import { QueryBuilder } from "typeorm-express-query-builder"
import { ProductCategory } from "../../../../entities/ProductCategory"
import { IProductCategoryRepository } from "../../../IProducts/IProductCategoryRepository"


dotenv.config()


export class TypeormProductCategoryRepository implements IProductCategoryRepository {
	async save(productCategory: ProductCategory): Promise<ProductCategory> {
		const repository = getRepository(OrmProductCategory, process.env.NODE_ENV)
		const newProductCategory = repository.create(productCategory)
		return await repository.save(newProductCategory)
	}

	async find(productCategoryId: string): Promise<ProductCategory | void> {
		const repository = getRepository(OrmProductCategory, process.env.NODE_ENV)
		const productCategory = await repository.findOne({ where: { id: productCategoryId } })

		if (productCategory === undefined) {
			return
		}
		else {
			return productCategory
		}
	}

	async findByQuery(request: Request): Promise<OrmProductCategory[]> {
		const repository = getRepository(OrmProductCategory, process.env.NODE_ENV)
		const query = new QueryBuilder(request.query).build()
		query.relations = ["company", "products"]
		return await repository.find(query)
	}
}