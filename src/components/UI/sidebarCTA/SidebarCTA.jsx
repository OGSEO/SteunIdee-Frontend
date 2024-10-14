import './SidebarCTA.css'
import {Link} from "react-router-dom";

export default function SidebarCTA({children, linkto}) {
    return (
        <div className='sidebar-cta-box'>
            <Link to={linkto}>
                <button className='sidebar-cta-btn'>
                    <div className='cta-label'>{children}</div>
                </button>
            </Link>
        </div>
    )
}