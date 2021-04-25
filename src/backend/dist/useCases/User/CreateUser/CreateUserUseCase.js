"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../../entities/User");
class CreateUserUseCase {
    constructor(userRepository, authentication) {
        this.userRepository = userRepository;
        this.authentication = authentication;
    }
    async execute(data) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }
        else {
            data.password = await this.authentication.getHashPassword(data.password);
            const userId = await this.userRepository.save(new User_1.User(data));
            return await this.authentication.getJwt(userId);
        }
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
