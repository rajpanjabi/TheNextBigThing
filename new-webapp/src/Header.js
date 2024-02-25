import logo from './LogoIcons&Images/Logos-Readability-Netflix-logo.png';
import langIcon from './LogoIcons&Images/language_icon.png'
import { useNavigate } from "react-router-dom";
function Header(){
  let navigate=useNavigate();
  function HandleSignIn(){
      navigate("/SignIn")
  }
return (
<div className="header-container" style={{ display: 'flex' ,marginLeft:'5%'}}>
<div className="netflixLogo-container" style={{ flex: 1}}>
<div style={{flex:1, display:'flex'}} >
    <div style={{marginLeft:'6%'}}>
<img src={logo} alt="Logo" width={"40%"} style={{'marginRight':'35%'}}/></div>
<div className="language-container" style={{flex:1,'margin-top':'2%','marginLeft':'26%'}}>
    <button type="button" className="text" style={{'fontSize':'15px','background':'transparent', border: 'solid white', borderWidth: 'thin',borderRadius:'3px',padding:'8%',width: '100px'}}>English</button>
</div>
<div className="signUp-container" style={{flex:1,'margin-right':'13%','margin-top':'2%'}}>
<button type="button" onClick={HandleSignIn} style={{background:'rgb(229, 9, 20)','fontSize':'15px',color:'white',border:'thick',borderRadius:'3px',padding:'8%',width: '100px'}}>Sign In</button>
</div>
</div>
</div>
</div>
);

}
export default Header;