const express = require('express')
const router = express.Router()
const ProductController = require('./controllers/ProductController')

router.get('/products', ProductController.requestProducts)
//router.get('/products/:productId', BoardController.getChipContent)

module.exports = router