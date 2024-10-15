import {Navigate, useLocation} from "react-router-dom";
import ApiService from "./ApiService.js";


export const ProtectedRoute = ({element: Component}) => {
    const location = useLocation();

    return ApiService.isAutheticated() ? (
        Component
    ):(
        <Navigate to="/login" replace state={{from: location}} />
    )
};

export const AdminRoute= ({element: Component}) => {
    const location = useLocation();

    return ApiService.isAdmin() ? (
        Component
    ):(
        <Navigate to="/login" replace state={{from: location}} />
    )
};