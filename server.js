"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 8080;
(0, express_1.default)().get("/", (req, res) => {
    return res.json({ message: "Hello world!" });
});
(0, express_1.default)().listen(PORT, () => {
    console.info(`🟩 Server started on port: ${PORT} 📡`);
});
