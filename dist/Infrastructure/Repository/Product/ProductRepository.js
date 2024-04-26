"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalInstance_1 = require("../../../../prisma/GlobalInstance");
class ProductRepository {
    async getProductById(id) {
        try {
            const response = await GlobalInstance_1.prisma.product.findUnique({
                where: {
                    id: id
                },
            });
            return response;
        }
        catch (error) {
            throw new Error("Error:" + error);
        }
    }
    async getProducts(filter) {
        const andConditions = [];
        const productMap = new Map();
        for (const [key, value] of Object.entries(filter.data)) {
            productMap.set(key, value);
        }
        //adicionando filtros
        if (productMap.has("CNPJProvider"))
            andConditions.push({ CNPJProvider: filter.data.CNPJProvider });
        if (productMap.has("statusProduct"))
            andConditions.push({ statusProduct: filter.data.statusProduct });
        if (productMap.has("productDescription"))
            andConditions.push({ productDescription: filter.data.productDescription });
        if (productMap.has("manufacturingDate"))
            andConditions.push({ manufacturingDate: filter.data.manufacturingDate });
        if (productMap.has("expirationDate"))
            andConditions.push({ expirationDate: filter.data.expirationDate });
        if (productMap.has("idProvider"))
            andConditions.push({ idProvider: filter.data.idProvider });
        if (productMap.has("descriptionProvider"))
            andConditions.push({ descriptionProvider: filter.data.descriptionProvider });
        try {
            const response = await GlobalInstance_1.prisma.product.findMany({
                where: {
                    AND: andConditions
                }
            });
            return response;
        }
        catch (error) {
            throw new Error("Error:" + error);
        }
    }
    async insertProduct(product) {
        try {
            // const response = await prisma.product.create({data:product})
            const response = await GlobalInstance_1.prisma.product.create({ data: product });
            return response;
        }
        catch (error) {
            throw new Error("Error:" + error);
        }
    }
    async updateProduct(product) {
        try {
            const response = await GlobalInstance_1.prisma.product.update({
                where: {
                    id: product.id
                }, data: product
            });
            return response;
        }
        catch (error) {
            throw new Error("Error:" + error);
        }
    }
    async deleteProduct(id) {
        try {
            const statusProduct = await GlobalInstance_1.prisma.product.findUnique({ where: { id: id }, select: { statusProduct: true } });
            if (!statusProduct?.statusProduct) {
                return {
                    message: "Este item ja está desativado"
                };
            }
            const response = await GlobalInstance_1.prisma.product.update({
                where: { id: id }, data: {
                    statusProduct: false
                }
            });
            return {
                message: "O item foi desativado",
                data: response
            };
        }
        catch (error) {
            throw new Error("Error:" + error);
        }
    }
}
exports.default = ProductRepository;
