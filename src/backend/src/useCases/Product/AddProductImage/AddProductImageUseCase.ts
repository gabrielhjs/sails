import { IAddProductImageRequestDTO } from "./AddProductImageDTO"
import sharp from "sharp"
import fs from "fs"

export class AddProductImageUseCase {
	constructor(
		// private productStockRepository: IProductStockRepository,
	) { }

	async execute(data: IAddProductImageRequestDTO): Promise<void> {
		console.log(data)
		sharp("temp/products/images/" + data.filename).resize(
			200, 200, {
			fit: "inside",
			position: "right top",
		}
		)
			.toFormat("png", { quality: 100 })
			.toFile("temp/products/images/" + data.productId + "-thumbnail.png")
			.then(() => { fs.unlink("temp/products/images/" + data.filename, () => { }) })
	}
}