"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
const connect_1 = require("./typeorm/connect");
const app_1 = require("./app");
connect_1.connection.create(process.env.NODE_ENV || "deafult");
app_1.app.use(cors_1.default());
app_1.app.listen(3333);
