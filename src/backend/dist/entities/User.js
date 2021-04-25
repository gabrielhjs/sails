"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const BaseEntity_1 = require("./BaseEntity");
class User extends BaseEntity_1.BaseEntity {
    constructor(props, id) {
        super(props, id);
        Object.assign(this, props);
    }
}
exports.User = User;
