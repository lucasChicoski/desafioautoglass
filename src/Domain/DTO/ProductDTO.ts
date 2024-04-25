

export default interface ProductDTO{
    id?: number
    descritption: string
    statusProduct: boolean
    expirationDate: Date //data de validade
    manufacturingDate: Date //data de fabricação
    idProvider: string
    descriptionProvider: string
    CNPJProvider: string
}