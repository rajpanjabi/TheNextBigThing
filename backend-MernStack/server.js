import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import MovieRoutes from "./routes/MovieRoutes.js"


const app= express();
const port=4000;
dotenv.config();

app.use(cors());
app.use(express.json());



//method for modularity

app.use((req,res,next)=>{
  console.log(req.path, req.method)
  next()
  
  })
  
  
app.use('/api/movies',MovieRoutes)



//database connection

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => 
  //listen for requests
  app.listen(port,()=>{
    console.log(`DB connection successful... and Server running on ${port}`)

}))
  .catch((err) => console.log(err));






 
// const newMovie = new Movie({
//   title: "Movie 1",
//   description: "Description of Movie 1",
//   image: "image1.jpg",
//   imageTitle: "Image Title 1",
//   imageSmall: "small_image1.jpg",
//   trailer: "trailer_url1",
//   video: "video_url1",
//   year: "2022",
//   limit: 18,
//   genre: "Action",
//   duration: "2 hours",
//   isSeries: false
// });

// newMovie.save()
//   .then(Movie => {
//     console.log("Movie added successfully:", Movie);
//   })
//   .catch(err => {
//     console.error("Error adding movie:", err);
//   });

  
// app.get("/hell",(req,res)=>{
//   console.log("here to get dtaa")

//   res.send("hellooos")
  
  
  
  
// })


// app.get("/db", async (req, res) => {
//   try {
//     const movies = await Movie.find({});
//     res.json(movies);
//   } catch (err) {
//     console.error("Error fetching movies:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

