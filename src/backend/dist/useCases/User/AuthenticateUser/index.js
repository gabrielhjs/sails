"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUserController = exports.authenticateUserUseCase = void 0;
const BcryptJwtAuthenticationProvider_1 = require("../../../providers/AuthenticationProvider/implements/BcryptJwtAuthenticationProvider");
const UsersRepository_1 = require("../../../repositories/implements/typeorm/Users/UsersRepository");
const AuthenticateUserController_1 = require("./AuthenticateUserController");
const AuthenticateUserUseCase_1 = require("./AuthenticateUserUseCase");
const authenticationProvider = new BcryptJwtAuthenticationProvider_1.BcryptJwtAuthenticationProvider;
const usersRepository = new UsersRepository_1.TypeormUsersRepository;
const authenticateUserUseCase = new AuthenticateUserUseCase_1.AuthenticateUserUseCase(usersRepository, authenticationProvider);
exports.authenticateUserUseCase = authenticateUserUseCase;
const authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController(authenticateUserUseCase);
exports.authenticateUserController = authenticateUserController;
