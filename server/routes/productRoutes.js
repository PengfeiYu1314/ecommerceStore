import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'
import expressAsyncHandler from 'express-async-handler'

router.get('/', expressAsyncHandler( async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

router.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    product ? res.json(product) : res.status(404).json({msg: 'Product not exist'})
}))

export default router