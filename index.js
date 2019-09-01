const express = require('express');
const app = express();

const PORT = 4000;

function handleListening() {
    console.log(`Listening on localhost:${PORT}`);
}

function handleHome(req, res) {
    res.send("Welcome Home!");
}

app.get("/", handleHome);

app.listen(PORT, handleListening);