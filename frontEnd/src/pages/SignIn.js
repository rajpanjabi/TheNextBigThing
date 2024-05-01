import React, { useState,useEffect } from "react";
import "./SignIn.css"
import {useNavigate} from "react-router-dom";
import logo from '../LogoIcons&Images/Logos-Readability-Netflix-logo.png';

function SignIn(){
    let navigate = useNavigate();
    const [name,setName]= useState("");
    const [password, setPassword]= useState("");
    useEffect(() => {
        sessionStorage.setItem('pageRefreshed', 'true');
        return () => {
          sessionStorage.removeItem('pageRefreshed');
        };
      }, []);
    const isPageRefreshed = sessionStorage.getItem('pageRefreshed') === 'true';
      
    function nameChange(event){
        setName(event.target.value)
    }
    function passChange(event){
        setPassword(event.target.value)
    }

    function handleSignIn(e){
        e.preventDefault();
        console.log(e.target.name);
        console.log(e.target.password);
        console.log("I'm here")
        console.log(name);
        console.log(password);
        navigate('/browse');
    }
    
    return(
    <div className="base ">
    <div className="imgL" >
    <img className="logo" src={logo}></img>
     </div>
     <div className="SignInContainer">
     <h1 className="signintext">Sign In</h1>
     <form className="op" onSubmit={handleSignIn}>
     <div className="inputs">
      <input className="backGrey" onChange={nameChange} type="text" placeholder="Email or phone number" value={name} ></input>
      <input  className="backGrey" onChange={passChange} type="text" placeholder="Password" value={password}  ></input>
      <input type="submit"  className="redcol" value="Sign In"></input>
     </div>
     <div className="entLine"> 
     <input type="checkbox"></input>
     <p>Remember me</p>
     <p className="help">Need help?</p>
     </div>
     <div className="NewNetf"> 
     <p> New to Netflix? <a style={{"textDecoration":"none", "textDecorationColor":"none"}} href="/NetflixClone">Sign Up now! </a></p>
     <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
     </div>
    </form>
    </div>
   </div>);
 }

export default SignIn;