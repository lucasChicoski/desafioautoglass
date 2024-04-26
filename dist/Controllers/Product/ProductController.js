"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FilterModel_1 = __importDefault(require("../../Domain/Models/FilterModel"));
const ProductModel_1 = __importDefault(require("../../Domain/Models/ProductModel"));
class ProductController {
    //Inversão de dependência
    productService;
    constructor(productService) {
        this.productService = productService;
    }
    async getProductById(req, res) {
        const id = req.body.id;
        try {
            const response = await this.productService.getProductById(id);
            return res.json(response);
        }
        catch (error) {
            return Error("Error:" + error);
        }
    }
    async getProducts(req, res) {
        const body = req.body;
        try {
            const searchFilter = new FilterModel_1.default(body);
            const response = await this.productService.getProducts(searchFilter);
            return res.json(response);
        }
        catch (error) {
            return Error("Error:" + error);
        }
    }
    async insertProduct(req, res) {
        const body = req.body;
        const newProduct = new ProductModel_1.default(body);
        try {
            const response = await this.productService.insertProduct(newProduct);
            return res.json(response);
        }
        catch (error) {
            return Error("Error:" + error);
        }
    }
    async updateProduct(req, res) {
        const body = req.body;
        const updateProduct = new ProductModel_1.default(body);
        try {
            const response = await this.productService.updateProduct(updateProduct);
            return res.json(response);
        }
        catch (error) {
            return Error("Error:" + error);
        }
    }
    async deleteProduct(req, res) {
        const id = req.body.id;
        try {
            const response = await this.productService.deleteProduct(id);
            return res.json(response);
        }
        catch (error) {
            return Error("Error:" + error);
        }
    }
}
exports.default = ProductController;
