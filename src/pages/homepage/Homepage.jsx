import './Homepage.css';
import FirstOption from "../../components/firstOption/FirstOption.jsx";

export default function Homepage() {
    return (
        <div className='landing-page'>
            <FirstOption title='Ik ben Burger' registerOption='CITIZEN' buttonTitle='Meld u aan als burger' />
            <FirstOption title='Ik ben Politici' registerOption='POLITICIAN' buttonTitle='Meld u aan als politici' />
        </div>
    )
}