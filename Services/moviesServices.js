const movieModel = require("../models/movieModel")

// get all movies
const getAllMovies = async () => {
    const movies = await movieModel.find({})
    return movies
}

// get movies by ID
const getMovieById = async (id) => {
    const movie = await movieModel.findById(id)
    return movie
}

// POST - create movie
const createMovie = async (movie) => {
    const newMovie = new movieModel(movie)
    await newMovie.save()
    return "Created"
}

// PUT - update movie

const updateMovie = async (id, newMovieData) => {
    await movieModel.findByIdAndUpdate(id, newMovieData)
    return "Updated"
}

// Delete

const deleteMovie = async (id) => {
    await movieModel.findByIdAndDelete(id)
    return "Deleted"
}

module.exports = {getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie}