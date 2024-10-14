import './NavBar.css'
import {NavLink, useNavigate} from "react-router-dom";
import ApiService from "../../../service/ApiService.js";

const Navbar = () => {
    const navigate = useNavigate();

    const isAuthenticated = ApiService.isAutheticated();
    // const isPolitician = ApiService.isPolitician();

    const handleLogout = () => {
        const confirm = window.confirm("Are you sure you want to logout?");
        if(confirm) {
            ApiService.logout();
            setTimeout(() => {
                navigate('/login')
            }, 500);
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/">TopIdea</NavLink>
            </div>
            <div className="navbar-links">
                {/*{isAdmin && <NavLink to="/admin">Admin</NavLink>}*/}
                <NavLink to="/profile">My Account</NavLink>
                {isAuthenticated && <NavLink onClick={handleLogout}>Logout</NavLink>}
            </div>
        </nav>
    )
}

export default Navbar;