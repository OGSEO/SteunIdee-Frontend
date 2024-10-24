import {Link} from "react-router-dom";
import './FirstOption.css'
import Registerbutton from "../UI/registerButton/RegisterButton.jsx";
// import {useRef} from "react";

export default function OptionBox({ children }) {

    // function handleRegisterOption() {
    //     localStorage.setItem("REGISTER_OPTION", registerOption);
    //     console.log("RegisterOption pressed: ", registerOption)
    // }

    // const option = useRef();
    // console.log(option.current);

    // function handleSubmit() {
    //     console.log("handelen");
    // }

    return (
        <div className="first-option-container">
            {children}
        </div>
    )
}