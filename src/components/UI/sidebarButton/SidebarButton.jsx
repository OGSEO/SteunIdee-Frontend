import './SidebarButton.css';
import {Link} from "react-router-dom";

export default function SidebarButton( {children, icon, linkto}) {
    return (
        <Link to={linkto} className='sidebar-btn'>
            <span className='btn-icon'>{icon}</span>
            <div className='btn-label'>{children}</div>
        </Link>
    )
}