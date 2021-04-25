"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
const uuid_1 = require("uuid");
class BaseEntity {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid_1.v4();
            this.createdAt = new Date();
            this.updatedAt = this.createdAt;
        }
        else {
            this.updatedAt = new Date();
        }
    }
}
exports.BaseEntity = BaseEntity;
