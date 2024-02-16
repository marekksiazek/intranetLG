import logo from '../assets/logo.png';
import '../componentsCSS/header.css';

function Header() {
    return (
        <div className="headerWrapper">
            <img src={logo} alt="logo.png" className="logo" />
            <input type="text" className="searchbar" placeholder="Search in PIM"/>
            <button className="searchBtn">Search</button>
        </div>
    );
}

export default Header;