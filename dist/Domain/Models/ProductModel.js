"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductModel {
    id;
    description;
    statusProduct;
    expirationDate; //data de validade
    manufacturingDate; //data de fabricação  
    idProvider;
    descriptionProvider;
    CNPJProvider;
    constructor(data) {
        if (data?.id) {
            this.id = data.id;
        }
        this.description = data.description;
        this.statusProduct = data.statusProduct;
        this.expirationDate = new Date(data.expirationDate);
        this.manufacturingDate = new Date(data.manufacturingDate);
        this.idProvider = data.idProvider;
        this.descriptionProvider = data.descriptionProvider;
        this.CNPJProvider = data.CNPJProvider;
    }
}
exports.default = ProductModel;
