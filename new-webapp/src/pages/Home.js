import React from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";

function Home(){
    let navigate=useNavigate();


    function HandleSignIn(){
        navigate("/SignIn")

    }

    function HandleSignUp(){
        navigate("/SignUp")

    }

return(<div  className="kk">
 <div> 

<div className="Net"> 
<h1 >Netflix</h1>
</div>

<form className="formD" > 
<input type="submit" onClick={HandleSignIn} className="opt" value="Sign In"></input>
<input type="submit" onClick={HandleSignUp}  className="opt" value="Sign Up"></input>

</form>

 

 </div>


 </div>
)}

export default Home;