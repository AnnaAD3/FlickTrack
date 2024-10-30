const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: String,
    releaseDate: Number
})

const model = mongoose.model("movie", movieSchema)

module.exports = model