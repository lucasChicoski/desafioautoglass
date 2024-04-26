"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const ProductService_1 = __importDefault(require("../../Service/Product/ProductService"));
const ProductRepository_1 = __importDefault(require("../../Infrastructure/Repository/Product/ProductRepository"));
const productRepository = new ProductRepository_1.default();
const productServer = new ProductService_1.default(productRepository);
(0, globals_1.describe)("Product Service", () => {
    (0, globals_1.test)("DeleteProduct", async () => {
        (0, globals_1.expect)(await productServer.deleteProduct(1)).toBe({
            message: "O item foi desativado",
        });
    });
});
