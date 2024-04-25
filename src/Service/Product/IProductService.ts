import ProductDTO from "../../Domain/DTO/ProductDTO"
import FilterModel from "../../Domain/Models/FilterModel"

export default interface IProductService{
        getProductById(id: number): Promise<any>
        getProducts(filter: FilterModel): Promise<any>
        insertProduct(product: ProductDTO): Promise<any>
        updateProduct(product: ProductDTO): Promise<any>
        deleteProduct(id: number): Promise<any>
}

