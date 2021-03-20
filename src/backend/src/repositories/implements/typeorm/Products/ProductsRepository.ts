import dotenv from "dotenv"
import { Product } from "../../../../entities/Product"
import { IProductRepository } from "../../../IProducts/IProductRepository"


dotenv.config()


export class TypeormProductRepository implements IProductRepository {
	find(productId: string): Promise<void | Product> {
		throw new Error("Method not implemented.")
	}
	save(productStock: Product): Promise<void> {
		throw new Error("Method not implemented.")
	}
}