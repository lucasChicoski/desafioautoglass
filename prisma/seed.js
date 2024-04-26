"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listProduct = [
    {
        descritption: "Mouse Corsair ",
        statusProduct: true,
        expirationDate: new Date(),
        manufacturingDate: new Date(),
        CNPJProvider: "05.535.060/0001-22",
        descriptionProvider: "Corsair Brasil",
        idProvider: "23123123"
    }
];
async function main() {
    listProduct.forEach(async (element) => {
        await prisma?.product.create({
            data: {
                CNPJProvider: element.CNPJProvider,
                description: element.descritption,
                descriptionProvider: element.descriptionProvider,
                expirationDate: element.expirationDate,
                idProvider: element.idProvider,
                manufacturingDate: element.manufacturingDate,
                statusProduct: element.statusProduct
            }
        });
    });
}
main();
