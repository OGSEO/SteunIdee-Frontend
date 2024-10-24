import {Outlet} from "react-router-dom";
import './RootLayout.css';
import Navbar from "../../components/UI/navBar/NavBar.jsx";

export default function RootLayout() {
    return (
        <>
            <Navbar/>
            <main className="main-page">
                <Outlet/>
            </main>
        </>
    )
}