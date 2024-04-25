
import { Router } from "express"
import ProductController from "./Controllers/Product/ProductController"
import ProductService from "./Service/Product/ProductService"

const productService: ProductService = new ProductService()

const productController: ProductController = new ProductController(productService)

function setRouter(app: Router) {
   app.post('/products/getbyid', (req, res) => productController.getProductById(req, res))
   app.post('/products/getlistproducts', (req, res) => productController.getProducts(req, res))
   app.post('/products/insertproducts', (req, res) => productController.insertProduct(req, res))
   app.put('/products/updateproducts', (req, res) => productController.updateProduct(req, res))
   app.delete('/products/deleteproducts', (req, res) => productController.deleteProduct(req, res))
   // app.put("/teste", (req, res) => { res.send("ROTA PUT TESTADA") })
}



export default setRouter