"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageMiddleware = exports.authMiddleware = void 0;
const JwtMiddlewareProvider_1 = require("./providers/AuthenticationProvider/implements/JwtMiddlewareProvider");
const MulterMiddlewareProvider_1 = require("./providers/FilesMiddlewareProvider/implements/MulterMiddlewareProvider");
const authMiddleware = new JwtMiddlewareProvider_1.JwtAuthenticationMiddleware;
exports.authMiddleware = authMiddleware;
const imageMiddleware = MulterMiddlewareProvider_1.multerImageMiddleware;
exports.imageMiddleware = imageMiddleware;
