import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const handleOpen = () => console.log("Connected on Database");
const handleError = (error) => console.log(`Error on Database Connection : ${error}`);

const db = mongoose.connection;

db.once("open", handleOpen);
db.on("error", handleError);