import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"


function Browse(){
    let navigate=useNavigate();
    let [data,setData]= useState("");

    async function getData(){
        try{
        const result = await axios.get("http://localhost:4000/hell");
        console.log(result.data);
        setData(result.data)
        
        }
        catch(err){
            console.log(err);
        }

    }

    function Catalog(){

        navigate('/Catalogue')
    }

    return(


        <>
        <h1> Who's Watching</h1>
        <button onClick={getData}>Dataaa</button>
        <p>{data}</p>
        <button onClick={Catalog}>Go To Catalogue</button>



        
        {/* navigate("/Catalogue") */}
        {/* <Users></Users>

        <Manage Profiles></Manage> */}

        </>
    )


}

export default Browse;





