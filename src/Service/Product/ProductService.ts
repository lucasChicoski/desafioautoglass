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
        if(product.manufacturingDate >= product.expirationDate){
            return {
                "Menssagem": "Não é possível atualizar pois a data de fabricação é maior ou igual a data de validade."    
            }
        }

        const response = await this.productRepository.insertProduct(product)
        if(response?.id){
            return response
        }

        return {
            "Menssagem": "Não foi possível Adicionar o item"
        };

    }
    async updateProduct(product: ProductDTO): Promise<any> {

        if(product.manufacturingDate >= product.expirationDate){
            return {
                "Menssagem": "Não é possível atualizar pois a data de fabricação é maior ou igual a data de validade."    
            }
        }

        const response = await this.productRepository.updateProduct(product)

        if(response){
            return response
        }

        return {
            "Menssagem": "Não foi possível atualizar o item"
        };
    }
    async deleteProduct(id: number): Promise<any> {
        const response = await this.productRepository.deleteProduct(id)

        return response
    }
}