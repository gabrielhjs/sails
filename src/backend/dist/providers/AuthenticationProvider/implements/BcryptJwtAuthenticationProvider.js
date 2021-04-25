"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptJwtAuthenticationProvider = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class BcryptJwtAuthenticationProvider {
    async getHashPassword(password) {
        return bcrypt_1.default.hash(password, 10)
            .catch((error) => { throw new Error(error.message); })
            .then((hashPassword) => { return hashPassword; });
    }
    async comparePassword(password, passwordHash) {
        return bcrypt_1.default.compare(password, passwordHash)
            .catch((error) => { throw new Error(error.message); })
            .then((response) => { return response; });
    }
    async getJwt(userId) {
        const my_secret = "secret";
        return jsonwebtoken_1.default.sign({ id: userId }, my_secret, { expiresIn: "1d" });
    }
}
exports.BcryptJwtAuthenticationProvider = BcryptJwtAuthenticationProvider;
