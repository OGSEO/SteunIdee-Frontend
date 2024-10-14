import './RegisterButton.css';
import {Link} from "react-router-dom";

export default function Registerbutton({children}) {
    return (
    <Link to="/login" className="register-btn">{children}</Link>
    )
}