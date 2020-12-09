const ProductService = require('../services/ProductService')
let productController = {}


productController.requestProducts= (req,res) => {
   const response = ProductService.requestProducts()
   return res.status(201).send(response)
}



module.exports = productController