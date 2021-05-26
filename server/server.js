import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorHandler.js'
dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome !')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 8000 ;


app.listen(PORT, () => {
    console.log(`Server is runnig on PORT ${PORT}`.blue.bold)
})