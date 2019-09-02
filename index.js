import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();

const PORT = 4000;

const handleListening = () => 
    console.log(`Listening on localhost:${PORT}`);

const handleHome = (req, res) => 
    res.send("Welcome Home!");

const handleProfile = (req, res) => 
    res.send("You're on my profile");

// MiddleWares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);