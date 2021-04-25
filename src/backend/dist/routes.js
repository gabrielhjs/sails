"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = express_1.Router();
exports.router = router;
router.get("/status/", (request, response) => {
    return response.status(200).send({ status: "ok" });
});
