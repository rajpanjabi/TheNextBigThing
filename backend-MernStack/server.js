import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose";
import cors from "cors";
import Movie from "./models/Movie.js"; 
// import auth from "./routes/auth"

const app= express();
const port=4000;

app.use(bodyParser.urlencoded({"extended":"true"}));

app.use(cors());
app.use(express.json());


mongoose
  .connect("mongodb+srv://admin:admin@cluster0.4jvsgwg.mongodb.net/Netflix?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful...'))
  .catch((err) => console.log(err));


  


app.get("/hell",(req,res)=>{
    console.log("here to get dtaa")

    res.send("hellooos")
    
    
    
    
})



 
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

  


app.get("/db", async (req, res) => {
    try {
      const movies = await Movie.find({});
      res.json(movies);
    } catch (err) {
      console.error("Error fetching movies:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

app.listen(port,()=>{
    console.log(`Server running on ${port}`)

});