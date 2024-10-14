import {Outlet} from "react-router-dom";
import './RootLayout.css';
import Navbar from "../../components/UI/navBar/NavBar.jsx";
import Footer from "../../components/UI/footer/Footer.jsx";

export default function RootLayout() {
    return (
        <>
            <header>

                <Navbar/>
            </header>
    <main className="main-page">
        <Outlet/>
    </main>

                <Footer/>
        </>
)
}