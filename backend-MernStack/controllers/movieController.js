

import Movie from "../models/Movie.js"
import mongoose from "mongoose"

const getAllMovies= async(req,res)=>{
    try{
        console.log("here")
        const result = await Movie.find({}).sort({createdAt:-1});
        res.status(200).json(result)
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error})
    }



}
export default getAllMovies;