import { LOGO_URL } from "../utils/constants";
const Header = () => (
    <div className="Header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="navbar-items">  
           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Cart</li>
            </ul> 
        </div>
    </div>
); 
export default Header;