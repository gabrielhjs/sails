import { Product } from "../../entities/Product";


export interface IProductRepository {
	find(productId: string): Promise<Product | void>
	save(productStock: Product): Promise<void>
}