import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import {notFound, errorHandler} from './middleware/errorHandler.js'
dotenv.config();

connectDB();

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orederRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 8000 ;


app.listen(PORT, () => {
    console.log(`Server is runnig on PORT ${PORT}`.blue.bold)
})