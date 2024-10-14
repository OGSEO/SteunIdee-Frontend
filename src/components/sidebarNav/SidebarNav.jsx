import './SidebarNav.css';
// import {useAuth} from "../../context/AuthContext.jsx";
// import {Link} from "react-router-dom";
import SidebarButton from "../UI/sidebarButton/SidebarButton.jsx";
import SidebarCTA from "../UI/sidebarCTA/SidebarCTA.jsx";
// import {useEffect, useState} from "react";

export default function SidebarNav() {
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
            <SidebarButton linkto='/ideas'>Home</SidebarButton>
            <SidebarButton>Mijn ideeen</SidebarButton>
            <SidebarButton>Steun ideeen</SidebarButton>
            <SidebarButton logout>Uitloggen</SidebarButton>
        </div>
    )
}