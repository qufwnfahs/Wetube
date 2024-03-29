import app from "./app";
import "./db";
import dotenv from "dotenv";
import "./models/Video";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => {
    console.log(`Listening on http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);