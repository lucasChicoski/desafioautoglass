import ProductDTO from "../../Domain/DTO/ProductDTO"

export default interface IProductService{
        getProductById(id: number): Promise<any>
        getProducts(filter: object): Promise<any>
        insertProduct(product: ProductDTO): Promise<any>
        updateProduct(product: ProductDTO): Promise<any>
        deleteProduct(statusProduct: boolean): Promise<any>
}

