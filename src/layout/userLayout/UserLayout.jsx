import {Outlet} from "react-router-dom";
import './UserLayout.css';
import SidebarNav from "../../components/sidebarNav/SidebarNav.jsx";
import SidebarInfo from "../../components/sidebarInfo/SidebarInfo.jsx";

export default function UserLayout() {
    return (
        <main className="user-main-page">
            <SidebarNav/>
            <div className='main-content'>
                <Outlet/>
            </div>
            <SidebarInfo />
        </main>
    )
}