"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const __1 = require("../..");
const AuthenticateUser_1 = require("./AuthenticateUser");
const CreateUser_1 = require("./CreateUser");
const GetUsers_1 = require("./GetUsers");
const userRouter = express_1.Router();
exports.userRouter = userRouter;
userRouter.post("/", (request, response) => {
    return CreateUser_1.createUserController.handle(request, response);
});
userRouter.get("/", __1.authMiddleware.handle, (request, response) => {
    return GetUsers_1.getUserController.handle(request, response);
});
userRouter.post("/login/", (request, response) => {
    return AuthenticateUser_1.authenticateUserController.handle(request, response);
});
