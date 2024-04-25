import ProductDTO from "../DTO/ProductDTO"

export default class ProductModel {
    id?: number
    descritption: string
    statusProduct: boolean
    expirationDate: Date //data de validade
    manufacturingDate: Date //data de fabricação  


    constructor(data: ProductDTO){
        if(data?.id){
            this.id = data.id
        }
        this.descritption = data.descritption
        this.statusProduct = data.statusProduct
        this.expirationDate = data.expirationDate
        this.manufacturingDate = data.manufacturingDate
    }
}