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
// app.use("/auth", auth);

mongoose
  .connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful...'))
  .catch((err) => console.log(err));


  


app.get("/hell",(req,res)=>{
    console.log("here to get dtaa")

    res.send("hellooos")
    
    
    
    
})

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