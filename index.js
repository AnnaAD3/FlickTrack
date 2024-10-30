const express = require('express');
const app  = express();
const port = 8000;

const cors = require("cors")
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/FlickTrack").then(() => console.log("Connected to DB"))

// middlewares
app.use(express.json())
app.use(cors())          //  allows other clients to send requests through HTML pages (axios/fetch)

// controllers
const moviesController = require("./Controller/moviesController")
app.use("/movies", moviesController)

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});