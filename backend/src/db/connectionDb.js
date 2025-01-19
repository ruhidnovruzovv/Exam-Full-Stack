import mongoose from "mongoose";

const URI = process.env.MONGO_URI

try {
    mongoose.connect(URI)
    console.log('DB connected')
} catch (error) {
    console.log('Dont connected DB')
}