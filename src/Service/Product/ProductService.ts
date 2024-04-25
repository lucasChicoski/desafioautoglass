import ProductDTO from "../../Domain/DTO/ProductDTO";
import IProductRepository from "../../Infrastructure/Repository/Product/IProductRepository";
import IProductService from "./IProductService";


export default class ProductService implements IProductService{
    productRepository: IProductRepository    

    constructor(productRepository: IProductRepository){
        this.productRepository = productRepository
    }
   async  getProductById(id: number): Promise<any> {
        const response = await this.productRepository.getProductById(id)

        return response
    }
    getProducts(filter: object): Promise<any> {
        throw new Error("Method not implemented.");
    }
    insertProduct(product: ProductDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }
    updateProduct(product: ProductDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteProduct(statusProduct: boolean): Promise<any> {
        throw new Error("Method not implemented.");
    }
}