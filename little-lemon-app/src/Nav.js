import { Link } from  "react-router-dom";
import "./index.css"
import navLogo from "./Images/Logo.svg";

const Nav = () => {
    return (
        <nav className="navbar">
            <img className="nav-logo" height={25} src={navLogo}/>
            <ul className="nav-list">
                <li><Link className='nav-item' to="/">Home</Link></li>
                <li><Link className='nav-item' to="/about">About</Link></li>
                <li><Link className='nav-item' to="/menu">Menu</Link></li>
                <li><Link className='nav-item' to="/reservations">Reservation</Link></li>
                <li><Link className='nav-item' to="/login">Login</Link></li>
                <li><Link className='nav-item' to="/confirmation">Confirmations</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;