import ProductDTO from "../../Domain/DTO/ProductDTO";
import IProductService from "./IProductService";


export default class ProductService implements IProductService{
    

    constructor(){}
    getProductById(id: number): Promise<any> {
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