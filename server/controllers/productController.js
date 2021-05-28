import Product from '../models/productModel.js'
import expressAsyncHandler from 'express-async-handler'

const getProducts = expressAsyncHandler(async (req, res) => {
    const products = await Product.find({})
   
    res.json(products)
}) 

const getProductById = expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    product ? res.json(product) : res.status(404).json({msg: 'Product not exist'})
}) 

export {getProductById, getProductById}