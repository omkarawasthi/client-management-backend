import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const Connection = () =>{

    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("Database connected successfully");
    }).catch((error) => {
        console.log("Failed to connect to database", error);
    })
}