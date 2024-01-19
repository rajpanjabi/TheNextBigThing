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







