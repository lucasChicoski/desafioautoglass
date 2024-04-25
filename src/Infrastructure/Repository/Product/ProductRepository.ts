import ProductDTO from "../../../Domain/DTO/ProductDTO";
import IProductRepository from "./IProductRepository";

import {prisma} from "../../../../prisma/GlobalInstance"

export default class ProductRepository implements IProductRepository{
    constructor(){}
   async getProductById(id: number): Promise<any> {

        try {
            const response = await prisma.product.findUnique({
                where:{
                    id: id
                }
            })
            return response
        } catch (error) {
            throw new Error("Error:" + error)
        }
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