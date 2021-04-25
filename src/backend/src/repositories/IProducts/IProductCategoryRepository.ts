import { ProductCategory } from "../../entities/ProductCategory"


export interface IProductCategoryRepository {
	find(productCategoryId: string): Promise<ProductCategory | void>
	findByQuery(query: object): Promise<ProductCategory[]>
	save(productCategory: ProductCategory): Promise<ProductCategory>
}
