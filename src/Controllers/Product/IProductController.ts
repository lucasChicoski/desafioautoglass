import { Request, Response } from "express";

export default interface IProductController{
        getProductById(req: Request, res: Response): Promise<any>
        getProducts(req: Request, res: Response): Promise<any>
        insertProduct(req: Request, res: Response): Promise<any>
        updateProduct(req: Request, res: Response): Promise<any>
        deleteProduct(req: Request, res: Response): Promise<any>
}