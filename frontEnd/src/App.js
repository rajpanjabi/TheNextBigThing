import Signup from './pages/SignupPages/Signup';
import React from "react"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./pages/SignIn"
import Browse from "./pages/Browse"
import Catalogue from "./pages/Catalogue"

function App(){
return (
    <> 
   <Router>
    <Routes>
        <Route path="/SignIn" exact element={<SignIn/>}/>
        <Route path="/browse" exact element={<Browse/>}   /> 
        <Route path="/NetflixClone" exact element={<Signup/>}/>
        <Route path="/Raj" exact element={<Signup/>}/>
        <Route path="/Catalogue" exact element={<Catalogue/>}/>
        

    </Routes>
   </Router>
</>
)
}
export default App;
