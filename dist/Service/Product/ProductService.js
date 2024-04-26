"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductModel_1 = __importDefault(require("../../Domain/Models/ProductModel"));
class ProductService {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getProductById(id) {
        const response = await this.productRepository.getProductById(id);
        if (response) {
            const productModel = new ProductModel_1.default(response);
            return productModel;
        }
        return {
            "Messagem": "Nenhum usuário encontrado"
        };
    }
    async getProducts(filter) {
        const response = await this.productRepository.getProducts(filter);
        if (response && response.length) {
            return response;
        }
        return {
            "Menssagem": "Nenhum produto encontrado"
        };
    }
    async insertProduct(product) {
        if (product.manufacturingDate >= product.expirationDate) {
            return {
                "Menssagem": "Não é possível atualizar pois a data de fabricação é maior ou igual a data de validade."
            };
        }
        const response = await this.productRepository.insertProduct(product);
        if (response?.id) {
            return response;
        }
        return {
            "Menssagem": "Não foi possível Adicionar o item"
        };
    }
    async updateProduct(product) {
        if (product.manufacturingDate >= product.expirationDate) {
            return {
                "Menssagem": "Não é possível atualizar pois a data de fabricação é maior ou igual a data de validade."
            };
        }
        const response = await this.productRepository.updateProduct(product);
        if (response) {
            return response;
        }
        return {
            "Menssagem": "Não foi possível atualizar o item"
        };
    }
    async deleteProduct(id) {
        const response = await this.productRepository.deleteProduct(id);
        return response;
    }
}
exports.default = ProductService;
