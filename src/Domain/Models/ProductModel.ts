import ProductDTO from "../DTO/ProductDTO"

export default class ProductModel {
    id?: number
    description: string
    statusProduct: boolean
    expirationDate: Date //data de validade
    manufacturingDate: Date //data de fabricação  
    idProvider: string
    descriptionProvider: string
    CNPJProvider: string


    constructor(data: ProductDTO){
        if(data?.id){
            this.id = data.id
        }
        this.description = data.description
        this.statusProduct = data.statusProduct
        this.expirationDate = new Date(data.expirationDate) 
        this.manufacturingDate = new Date(data.manufacturingDate) 
        this.idProvider = data.idProvider
        this.descriptionProvider = data.descriptionProvider
        this.CNPJProvider = data.CNPJProvider
    }
}