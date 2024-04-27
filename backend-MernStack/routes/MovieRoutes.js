
import express from "express"
import getAllMovies from "../controllers/movieController.js"

const router =express.Router()

//Get all movies
router.get("/all", getAllMovies);

//Get single movie
//router.get("/movies/:id", singleMovieById)

//Get movie by genre

//Get movie by actor

//Get movie by actress




export default router;