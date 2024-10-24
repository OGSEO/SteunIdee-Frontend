import './SidebarButton.css';
import {Link} from "react-router-dom";

export default function SidebarButton( {children, icon, linkto, onClick}) {
    return (
        <Link to={linkto} onClick={onClick} className='sidebar-btn'>
            <span className='btn-icon'>{icon}</span>
            <div className='btn-label'>{children}</div>
        </Link>
    )
}