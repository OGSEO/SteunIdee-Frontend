import './Footer.css';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <ul>
                    <NavLink to="/">About Us</NavLink>
                    <NavLink to="/">Contact Us</NavLink>
                </ul>
            </div>
            <div className="footer-info">
                <p>&copy; 2024 Top Idea - All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer;