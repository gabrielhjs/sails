"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerImageMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const MulterConfig_1 = require("./MulterConfig");
exports.multerImageMiddleware = multer_1.default(MulterConfig_1.multerConfig);
