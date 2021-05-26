import mongoose from 'mongoose'


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MGDB, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold)
        process.exit(1)
    }
}

export default connectDB