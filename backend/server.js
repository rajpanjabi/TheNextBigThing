import express from "express"
import bodyParser from "body-parser"


const app= express();
const port=4000;

app.use(bodyParser.urlencoded({"extended":"true"}));


app.get("/",(req,res)=>{
    
    res.send("hello")
    
})


app.listen(port,()=>{
    console.log(`Server running on ${port}`)

});