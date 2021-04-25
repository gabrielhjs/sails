"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserUseCase = void 0;
class AuthenticateUserUseCase {
    constructor(usersRepository, authentication) {
        this.usersRepository = usersRepository;
        this.authentication = authentication;
    }
    async execute(data) {
        const user = await this.usersRepository.findByEmail(data.email);
        if (!user) {
            throw new Error("User and/or password not match");
        }
        else {
            if (await this.authentication.comparePassword(data.password, user.password)) {
                return await this.authentication.getJwt(user.id);
            }
            else {
                throw new Error("User and/or password not match");
            }
        }
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
