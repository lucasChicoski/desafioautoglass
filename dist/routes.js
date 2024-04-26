"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductController_1 = __importDefault(require("./Controllers/Product/ProductController"));
const ProductService_1 = __importDefault(require("./Service/Product/ProductService"));
const ProductRepository_1 = __importDefault(require("./Infrastructure/Repository/Product/ProductRepository"));
//Injeção de dependecia. Produtos
const productRepository = new ProductRepository_1.default();
const productService = new ProductService_1.default(productRepository);
const productController = new ProductController_1.default(productService);
function setRouter(app) {
    app.post('/products/getbyid', (req, res) => productController.getProductById(req, res));
    app.post('/products/getlistproducts', (req, res) => productController.getProducts(req, res));
    app.post('/products/insertproducts', (req, res) => productController.insertProduct(req, res));
    app.put('/products/updateproducts', (req, res) => productController.updateProduct(req, res));
    app.delete('/products/deleteproducts', (req, res) => productController.deleteProduct(req, res));
    app.get('/teste', (req, res) => res.send("Api funcionando 🚀"));
}
exports.default = setRouter;
