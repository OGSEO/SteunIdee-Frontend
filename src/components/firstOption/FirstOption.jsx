import {Link} from "react-router-dom";
import './FirstOption.css'
import Registerbutton from "../UI/registerButton/RegisterButton.jsx";

export default function FirstOption( { title, registerOption, buttonTitle }) {
    return (
        <div className="first-option-container">
            <h2>{title}</h2>
            <div>
                <Registerbutton>{buttonTitle}</Registerbutton>
            </div>
            <div>
                <p>Nog geen Account?</p>
                <Link to={`/register/${registerOption}`}>Schrijf je nu in</Link>
            </div>
        </div>
    )
}