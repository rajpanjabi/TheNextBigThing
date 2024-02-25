// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Header.css'; // Import a CSS file for styling (create this file if not already present)
import './Signup.css'; 
import Header from "./Header"
function Signup(){
return (
    <>
    <div className="app-container">
    <div className="background-container">
    <Header />
    <div className = "text" style={{marginTop:'8%'}}>
        <h1 style={{'textAlign':'center','marginBottom':'25px',fontWeight:'1000','font-size': 'xxx-large'}}>Unlimited movies,TV shows, and more</h1>
        <p style={{'textAlign':'center','marginBottom':'25px'}}>Watch anywhere. Cancel anytime.</p>
        <h3 style={{'textAlign':'center','marginBottom':'15px',fontWeight:'400',fontSize:'large'}}>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div style={{'display':'inline-flex','margin-left': '33%','width':'-webkit-fill-available'}}>
            <div style={{'margin-right': '1%',width: '35%'}}>
                <form>
                <input className="emailForm" type="text" placeholder="Email address" style={{'padding':'0.75rem 1.5rem','background':'linear-gradient(500deg, black, transparent)','background-clip':'padding-box',width:'100%', border: 'solid white', borderWidth: 'thin',borderRadius:'3px'}}></input>
               </form>
            </div>
            <div>
            <button type="button" className="btn btn-primary" style={{'padding':'0.75rem 1.5rem','background':'rgb(229, 9, 20)','border': 'thick','font-size': '17px','font-weight': '500',borderRadius:'3px'}}>Get started</button>
            </div>
        </div>
    </div>
    </div>
  </div> 
    </>
);
}

export default Signup;