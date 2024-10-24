import './SidebarNav.css';
import SidebarButton from "../UI/sidebarButton/SidebarButton.jsx";
import SidebarCTA from "../UI/sidebarCTA/SidebarCTA.jsx";
import {useNavigate} from "react-router-dom";
import ApiService from "../../service/ApiService.js";
import { BsHouse } from "react-icons/bs";

export default function SidebarNav() {
    const navigate = useNavigate();

    const isAuthenticated = ApiService.isAutheticated();
    // const auth = useAuth();
    // console.log(auth);
    // const [avatarUrl, setAvatarUrl] = useState("");

    // useEffect(() => {
    //     if (auth.user.avatar === null ) {
    //         setAvatarUrl(`http://localhost:8080/user/0/avatar`)
    //     } else {
    //         setAvatarUrl(`http://localhost:8080/user/${auth.user.id}/avatar`)
    //     }
    // }, [avatarUrl]);

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
        <div className="sidebar-nav-container">
            <div className='profile-box'>
                <div>
                    {/*<Link to={`/users/${auth.user.id}/avatar`}>*/}
                    {/*    {}*/}
                    {/*    <img src={avatarUrl}/>*/}
                    {/*</Link>*/}
                    IMG
                </div>
                <div>
                    {/*{auth.user.email}*/}
                    NAME
                </div>
            </div>
            <SidebarCTA linkto='new-idea'>Ik heb een idee</SidebarCTA>
            <SidebarButton linkto='/ideas' icon={<BsHouse />}>Home</SidebarButton>
            <SidebarButton linkto='/profile'>My Account</SidebarButton>
            <SidebarButton linkto='/ideas/user/1'>Mijn ideeen</SidebarButton>
            <SidebarButton>Steun ideeen</SidebarButton>
            <SidebarButton logout>Uitloggen</SidebarButton>
            {isAuthenticated && <SidebarButton onClick={handleLogout}>Logout</SidebarButton>}
        </div>
    )
}