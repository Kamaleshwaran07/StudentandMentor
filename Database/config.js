import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
// Using the MongoDb URL
const mongoDB = process.env.MongoDBConnectionString

const connectDB = async () => {
    try {
        console.log("Connecting to database...", mongoDB);
        const connection = await mongoose.connect(mongoDB)
        console.log("Connected to Database");
        return connection;
    }
    catch(error) {
        console.log("Error connecting to the db", error);
    }
}

export default connectDB;