import ProductDTO from "../../../Domain/DTO/ProductDTO";
import IProductRepository from "./IProductRepository";


export default class ProductRepository implements IProductRepository{
    constructor(){}
   async getProductById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
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