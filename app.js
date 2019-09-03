import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";
const app = express();

const handleHome = (req, res) => 
    res.send("Welcome Home!");

// MiddleWares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);

app.use("/user", userRouter);

export default app;