import { Product } from "../../entities/Product";


export interface IProductRepository {
	find(productId: string): Promise<Product | void>
	findByQuery(query: object): Promise<Product[]>
	save(productStock: Product): Promise<Product>
}