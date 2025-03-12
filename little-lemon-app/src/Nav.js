import { Link } from  "react-router-dom";
import "./index.css"

const Nav = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservation</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;