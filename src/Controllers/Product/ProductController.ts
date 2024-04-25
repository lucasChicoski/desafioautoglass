import { Request, Response } from "express";
import IProductController from "./IProductController";
import IProductService from "../../Service/Product/IProductService";
import FilterModel from "../../Domain/Models/FilterModel";
import ProductModel from "../../Domain/Models/ProductModel";
import ProductDTO from "../../Domain/DTO/ProductDTO";



export default class ProductController implements IProductController {
    //Inversão de dependência
    private readonly productService: IProductService
    constructor(productService: IProductService) {
        this.productService = productService
     }
   async getProductById(req: Request, res: Response): Promise<any> {
        const id: number = req.body.id
        try {
            const response  = await this.productService.getProductById(id);
            return res.json(response) 
        } catch (error) {
            return Error("Error:" + error)
        }
    }
    async getProducts(req: Request, res: Response): Promise<any> {
        const body = req.body

        try {
            const searchFilter = new FilterModel(body)
            const response = await this.productService.getProducts(searchFilter)
            return res.json(response)
        } catch (error) {
            return Error("Error:" + error)   
        }
    }
    async insertProduct(req: Request, res: Response): Promise<any> {
        const body = req.body as ProductDTO
        const newProduct = new ProductModel(body)

        try {
            const response  = await this.productService.insertProduct(newProduct)

            return res.json(response)
        } catch (error) {
            return Error("Error:" + error)
        }


    }
    updateProduct(req: Request, res: Response): Promise<any> {
        res.send("atualizar produto")
        throw new Error("Method not implemented.");
    }
    async deleteProduct(req: Request, res: Response): Promise<any> {
        const id = req.body.id

        try {
            const response = await this.productService.deleteProduct(id)
            return res.json(response) 
        } catch (error) {
            return Error("Error:" + error)
        }
    }
}