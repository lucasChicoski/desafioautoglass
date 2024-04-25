import { Request, Response } from "express";
import IProductController from "./IProductController";
import IProductService from "../../Service/Product/IProductService";



export default class ProductController implements IProductController {
    //Inversão de dependência
    private readonly productService: IProductService
    constructor(productService: IProductService) {
        this.productService = productService
     }
    getProductById(req: Request, res: Response): Promise<any> {
        res.send("rota obter produto por Id")
        throw new Error("Method not implemented.");
    }
    getProducts(req: Request, res: Response): Promise<any> {
        res.send("obter produtros (com ou sem filtro)")
        throw new Error("Method not implemented.");
    }
    insertProduct(req: Request, res: Response): Promise<any> {
        res.send("inserir produto")
        throw new Error("Method not implemented.");
    }
    updateProduct(req: Request, res: Response): Promise<any> {
        res.send("atualizar produto")
        throw new Error("Method not implemented.");
    }
    deleteProduct(req: Request, res: Response): Promise<any> {
        res.send("excluir produto")
        throw new Error("Method not implemented.");
    }
}