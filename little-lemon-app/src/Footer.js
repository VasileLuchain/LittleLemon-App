import './index.css';
import footerImg from './Images/restaurant chef B.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer-img" src={footerImg} width={300}/>
            <nav className="footer-doormat" aria-label="Doormat Navigation">
                <h3>DOORMAT</h3>
                <ul>
                    <li><a href="#">Navigation</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Highlights</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">User Reviews</a></li>
                </ul>
            </nav>
            <nav className="footer-contact">
                <h3>CONTACT</h3>
                <ul>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Phone Number</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </nav>
            <nav className="footer-media" aria-label="Social Meida Links">
                <h3>SOCIAL MEDIA</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;