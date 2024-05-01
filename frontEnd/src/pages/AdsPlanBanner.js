import icon from '../LogoIcons&Images/popc.png';
import './AdsPlanBanner.css';

function AdsPlanBanner(){
    return(
        <>
        <div className="banner">
        <div className= "bucket">
            <img src ={icon} style={{'width':'45%','paddingTop':'3%','borderRadius':'50%'}}/>
        </div>
        <div className="textb">
            <p className='textb1'>The Netflix you love for just $5.99. </p>
            <p className='textb2'> Get the Standard with ads plan. </p>
            <p className='testsb3'><a style={{"textDecoration":"none", "textDecorationColor":"none"}} href="/..">Learn More </a></p>
        </div>
        </div>
        </>
    )
}

export default AdsPlanBanner;