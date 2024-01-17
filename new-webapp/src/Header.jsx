import logo from './LogoIcons&Images/Logos-Readability-Netflix-logo.png';
import langIcon from './LogoIcons&Images/language_icon.png'
function Header(){
return (
<div className="header-container" style={{ display: 'flex' }}>
<div className="netflixLogo-container" style={{ flex: 1}}>
<div style={{flex:1, display:'flex'}}>
<img src={logo} alt="Logo" width={"20%"} style={{'marginRight':'20%'}}/>
<div className="language-container" style={{flex:1,'margin-right':'10%','border': 'ridge','borderRadius':'10px','marginLeft':'100px','padding':'30px'}}>
    <h3 className="text" style={{'fontSize':'20px'}}>English</h3>
</div>
<div className="signUp-container" style={{flex:1,'margin-right':'10%','border': 'ridge','borderRadius':'10px','backgroundColor':'rgb(153,22,29)','padding':'30px'}}>
    <h3 className="text" style={{'fontSize':'20px'}}>Sign In</h3>
</div>
</div>
</div>
</div>
);

}
export default Header;