import React from "react"
import ReactDOM from "react-dom"

let Users=["User1", "Guest", "Kids"];

function App(){
return (<div style={{backgroundColor:"black",height:"1000px", margin:"0px", padding:"0px",border:"0px"}} className="divfirst">

<div> 

<h1 style={{"color":"red",marginLeft:"700px"}}>Netflix</h1>
<p style={{"color":"white",marginLeft:"700px"}}> Users</p>

{Users.map((user)=> (<p style={{"color":"white",marginLeft:"700px"}}> {user} </p>)

)}

</div>



</div>)



}

export default App;