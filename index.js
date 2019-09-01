const express = require('express');
const app = express();

const PORT = 4000;

function handleListening() {
    console.log(`Listening on localhost:${PORT}`);
}

function handleHome(req, res) {
    res.send("Welcome Home!");
}

function handleProfile(req, res) {
    res.send("You're on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);