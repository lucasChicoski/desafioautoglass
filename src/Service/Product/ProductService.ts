import ProductDTO from "../../Domain/DTO/ProductDTO";
import ProductModel from "../../Domain/Models/ProductModel";
import IProductRepository from "../../Infrastructure/Repository/Product/IProductRepository";
import IProductService from "./IProductService";


export default class ProductService implements IProductService {
    productRepository: IProductRepository

    constructor(productRepository: IProductRepository) {
        this.productRepository = productRepository
    }
    async getProductById(id: number): Promise<any> {
        const response = await this.productRepository.getProductById(id)

        const productModel = new ProductModel(response)

        return productModel
    }
    async getProducts(filter: object): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async insertProduct(product: ProductDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async updateProduct(product: ProductDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async deleteProduct(statusProduct: boolean): Promise<any> {
        throw new Error("Method not implemented.");
    }
}