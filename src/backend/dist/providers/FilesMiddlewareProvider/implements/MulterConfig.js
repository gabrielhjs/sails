"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const uuid_1 = require("uuid");
const storageTypes = {
    local: multer_1.default.diskStorage({
        destination: (request, file, callback) => {
            callback(null, path_1.default.resolve(__dirname, "..", "..", "..", "..", "temp", "products", "images"));
        },
        filename: (request, file, callback) => {
            file.filename = uuid_1.v4() + "." + file.mimetype.split("/")[1];
            callback(null, file.filename);
        }
    }),
    memory: multer_1.default.memoryStorage()
};
exports.multerConfig = {
    dest: path_1.default.resolve(__dirname, "..", "..", "..", "..", "temp", "products", "images"),
    storage: storageTypes["local"],
    fileFilter: (request, file, callback) => {
        const formats = [
            "image/jpeg",
            "image/jpg",
            "image/png"
        ];
        if (formats.includes(file.mimetype)) {
            callback(null, true);
        }
        else {
            callback(new Error("Format not accepted"));
        }
    }
};
