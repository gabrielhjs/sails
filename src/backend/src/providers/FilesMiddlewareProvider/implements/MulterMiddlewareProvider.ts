import multer from "multer"
import { multerConfig } from "./MulterConfig"


export const multerImageMiddleware = multer(multerConfig)
