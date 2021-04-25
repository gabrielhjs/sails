"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthenticationMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtAuthenticationMiddleware {
    async handle(request, response, next) {
        const authorization = request.headers.authorization;
        if (!authorization) {
            return response.status(401).send({ error: "No token provided" });
        }
        const parts = authorization === null || authorization === void 0 ? void 0 : authorization.split(" ");
        if (!(parts.length === 2)) {
            return response.status(401).send({ error: "Token error" });
        }
        const [scheme, token] = parts;
        if (!/^Bearer$/i.test(scheme)) {
            return response.status(401).send({ error: "Wrong token scheme" });
        }
        const tokenData = jsonwebtoken_1.default.verify(token, "secret", (error, data) => {
            if (error) {
                return response.sendStatus(401);
            }
            else {
                return data;
            }
        });
        request.userId = "asD";
        return next();
    }
}
exports.JwtAuthenticationMiddleware = JwtAuthenticationMiddleware;
