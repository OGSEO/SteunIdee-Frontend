import './Homepage.css';
import OptionBox from "../../components/firstOption/OptionBox.jsx";
import Registerbutton from "../../components/UI/registerButton/RegisterButton.jsx";
import {Link} from "react-router-dom";

export default function Homepage() {
    return (
        <div className='landing-page'>
            <OptionBox>
                <Option title='Ik ben Burger' registerOption='CITIZEN' buttonTitle='Meld u aan als burger'/>
            </OptionBox>
            <OptionBox>
                <Option title='Ik ben Politici' registerOption='POLITICIAN' buttonTitle='Meld u aan als politici' />
            </OptionBox>
        </div>
    )
}

function Option( {title, registerOption, buttonTitle}) {
    return(
        <>
            <h2>{title}</h2>
            <div>
                <Registerbutton>{buttonTitle}</Registerbutton>
            </div>
            <div>
                <p>Nog geen Account?</p>
                {/*<input type="hidden" ref={option}>{registerOption}</input>*/}
                <Link to={`/register/${registerOption}`}>Schrijf je nu in</Link>
                {/*<button onSubmit={handleSubmit}> hndle</button>*/}
                {/*<button onSubmit={handleRegisterOption}><Link to="/register">Schrijf je nu in</Link></button>*/}
            </div>
        </>
    )
}