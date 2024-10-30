const moviesService = require("../Services/moviesServices")
const express = require("express")
const router = express.Router()

// localhost:8000/movies
// GET - ALL
router.get("/", async (req,res) => {
    try {
        const movies = await moviesService.getAllMovies()
        return res.json(movies)

    } catch(e) {
        return res.json({msg: e.messege})
    }

})

// localhost:8000/movies/dsfkf45dfg
// GET by ID
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id // {id: dsfkf45dfg}
        const movie = await moviesService.getMovieById(id)
        return res.json(movie)

    } catch(e) {
        return res.json({msg: e.messege})
    }

})

// POST - create movie
router.post("/", async (req, res) => {
    try {
        const movie = req.body
        const status = await moviesService.createMovie(movie) // status = "Created"
        return res.json({msg: status}) // {"msg: "Created"}

    } catch(e) {
        return res.json({msg: e.messege})
    }

})

// PUT - update movie
router.put("/:id", async (req,res) => {
    try {
        const id = req.params.id
        const newMovieData = req.body
        const status = await moviesService.updateMovie(id, newMovieData)
        return res.json({msg: status}) // {"msg: "Updated"}

    } catch(e) {
        return res.json({msg: e.messege})
    }

})

// DELETE - delete movie
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const status = await moviesService.deleteMovie(id)
        return res.json({ msg: status}) // {"msg: "Deleted"}

    } catch(e) {
        return res.json({msg: e.messege})
    }

})

module.exports = router