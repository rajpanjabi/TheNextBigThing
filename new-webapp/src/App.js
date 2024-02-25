import Signup from './Signup';
import React from "react"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./pages/SignIn"
import Browse from "./pages/Browse"

function App(){
return (
    <> 
   <Router>
    <Routes>
        <Route path="/SignIn" exact element={<SignIn/>}/>
        <Route path="/browse" exact element={<Browse/>}   /> 
        <Route path="/NetflixClone" exact element={<Signup/>}/>
    </Routes>
   </Router>
</>
)
}
export default App;
