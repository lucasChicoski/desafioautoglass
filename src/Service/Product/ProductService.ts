import ProductDTO from "../../Domain/DTO/ProductDTO";
import FilterModel from "../../Domain/Models/FilterModel";
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
        
        if(response){
            const productModel = new ProductModel(response)
            return productModel
        }

        return {
            "Messagem": "Nenhum usuário encontrado"
        }

    }
    async getProducts(filter: FilterModel): Promise<any> {

        const response = await this.productRepository.getProducts(filter)
        if(response && response.length){
            return response
        }

        return {
            "Menssagem": "Nenhum produto encontrado"
        }
    }
    async insertProduct(product: ProductDTO): Promise<any> {
        const response = await this.productRepository.insertProduct(product)
        if(response?.id){
            return response
        }

        return {
            "Menssagem": "Não foi possível Adicionar item"
        };

    }
    async updateProduct(product: ProductDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async deleteProduct(statusProduct: boolean): Promise<any> {
        throw new Error("Method not implemented.");
    }
}