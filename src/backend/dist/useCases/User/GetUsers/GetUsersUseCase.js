"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserUseCase = void 0;
class GetUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        return await this.userRepository.findByQuery(data.request);
    }
}
exports.GetUserUseCase = GetUserUseCase;
