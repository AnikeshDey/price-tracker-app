import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGO_URI) return console.log('MONGODB_URL is not defined');

    try {
        await mongoose.connect(process.env.MONGO_URI);
    
        isConnected = true;

        console.log('MongoDB Connected');
    
    } catch (error) {
        console.log(error);
    }
}