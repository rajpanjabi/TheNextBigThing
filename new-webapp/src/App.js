import React from "react"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import SignIn from "./pages/SignIn"

function App(){

    
return (
    <> 
   <Router>
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/SignIn" exact element={<SignIn/>}/>

    </Routes>
   </Router>
</>
)





}

export default App;



// let Users=["User1", "Guest", "Kids"];
// <div style={{height:"1000px", margin:"0px", padding:"0px",border:"0px"}} className="divfirst">

// <div> 

// <h1 style={{"color":"red"}}>Netflix</h1>
// <p style={{"color":"white"}}> Users</p>

// {Users.map((user)=> (<p style={{"color":"white",marginLeft:"700px"}}> {user} </p>)

// )}

// </div>



