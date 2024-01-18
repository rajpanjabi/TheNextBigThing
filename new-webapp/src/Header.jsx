import logo from './LogoIcons&Images/Logos-Readability-Netflix-logo.png';
import langIcon from './LogoIcons&Images/language_icon.png'
function Header(){
return (
<div className="header-container" style={{ display: 'flex' }}>
<div className="netflixLogo-container" style={{ flex: 1}}>
<div style={{flex:1, display:'flex'}} >
<img src={logo} alt="Logo" width={"20%"} style={{'marginRight':'35%'}}/>
<div className="language-container" style={{flex:1,'margin-right':'10%','margin-top':'3%','marginLeft':'100px'}}>
    <button type="button" className="text" style={{'fontSize':'13px','background':'transparent', border: 'solid white', borderWidth: 'thin',borderRadius:'3px'}}>English</button>
</div>
<div className="signUp-container" style={{flex:1,'margin-right':'10%','margin-top':'3%'}}>
<button type="button" style={{background:'rgb(229, 9, 20)','fontSize':'13px',color:'white',border:'thick',borderRadius:'3px'}}>Sign In</button>
</div>
</div>
</div>
</div>
);

}
export default Header;