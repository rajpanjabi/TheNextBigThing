
import React from "react";
import "./Catalogue.css"
import logo from '../LogoIcons&Images/Logos-Readability-Netflix-logo.png';

function Catalogue(){


    return(
        <div className="base2">


        <div className="head">
        <div className="log">
        <a href="/Catalogue">
            <img className="lognet" src={logo} ></img>
            </a>
        </div>
        
        <div className="menu">
        <ul>
        <li>
        Home

        </li>

        <li>
            TV Shows
        </li>
        <li>
        Movies
            
        </li>
        <li>
        New and Popular
            
        </li>
        <li>
        My List
            
        </li>
        <li>
        Browse By Languages
            
        </li>

        </ul>


        </div>

        <div className="rightSideMenuOptions">
        <ul>
            <li>
                Search
            </li>
            <li>
                Children
            </li>
            <li>
                Notifications
            </li>
            <li>
                Switch Profile
            </li>
        </ul>


        </div>

        </div>


        <div className="mainContainer">

        <div className="trailer"> 

        {/* <video src= "blob:https://www.netflix.com/0f4bfbd4-50f3-469c-aefc-ed74a2c6f3c6" ></video> */}
        <iframe 
        className="trail"
                
                src="https://www.youtube.com/embed/bV0RAcuG2Ao?autoplay=1" // Replace VIDEO_ID with the actual ID of the YouTube video
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            ></iframe>
        
        
        
        </div>
        <div className="rows">
        <h2 className="tit">
            <a className="tit">
            <div>Name of the title</div>
            <div>Explore all</div>

            </a>
        </h2>
        <div className="rowContainer">
            reuivrew
        </div>


        </div>



        </div>

      


        </div>
    )
}

export default Catalogue;





