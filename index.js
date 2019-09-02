import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => 
    console.log(`Listening on localhost:${PORT}`);

const handleHome = (req, res) => 
    res.send("Welcome Home!");

const handleProfile = (req, res) => 
    res.send("You're on my profile");

const between = (req, res, next) => {
    console.log("Between");
    next();
}

app.use(between); // It cound be use
                  // app.get("/", between, handleHome);
                  // app.get("/profile", between, handleProfile);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);