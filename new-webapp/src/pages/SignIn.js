import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./SignIn.css"


function SignIn(){
    
    return(
        

        // <h1 className="redfont"> Netflix</h1>
    
    <div className="base" >

    <div className="net">Netflix</div>
    

   <div className="SignInContainer">

   <h1 className="signintext">Sign In</h1>

<form action="/SignUp.js">
   <div className="inputs">
   <input className="backGrey" type="text" placeholder="Email or phone number"></input>
   <input className="backGrey" type="text" placeholder="Password"></input>
   <input type="submit" className="redcol" value="Sign In"></input>
   </div>

  <div className="entLine"> 
  
   <input type="checkbox"></input>
   <p>Remember me</p>
   
   <p className="help">Need help?</p>
   </div>

   <p> New to Netflix? Sign Up now!</p>
</form>





   </div>


    </div>);



}


export default SignIn;