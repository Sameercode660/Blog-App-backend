import mongoose from 'mongoose'


async function connectDB () {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log('Successfully connected:', connectionInstance.connection.host)
    } catch (error) {
        console.log('Error in connecting to db: ', error)
    }
}

export {
    connectDB
}