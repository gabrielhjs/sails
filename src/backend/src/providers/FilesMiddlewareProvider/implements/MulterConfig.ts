import path from "path"
import multer from "multer"
import { Options } from "multer"
import { v4 as uuidv4 } from "uuid"


const storageTypes = {
	local: multer.diskStorage({
		destination: (request, file, callback) => {
			callback(null, path.resolve(__dirname, "..", "..", "..", "..", "temp", "products", "images"))
		},
		filename: (request, file, callback) => {
			file.filename = uuidv4() + "." + file.mimetype.split("/")[1]
			callback(null, file.filename)
		}
	}),
	memory: multer.memoryStorage()
}


export const multerConfig = {
	dest: path.resolve(__dirname, "..", "..", "..", "..", "temp", "products", "images"),
	storage: storageTypes["local"],
	fileFilter: (request, file, callback) => {
		const formats = [
			"image/jpeg",
			"image/jpg",
			"image/png"
		]

		if (formats.includes(file.mimetype)) {
			callback(null, true)
		}
		else {
			callback(new Error("Format not accepted"))
		}
	}
} as Options