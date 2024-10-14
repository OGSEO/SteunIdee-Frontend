import './AddressPage.css';
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import ApiService from "../../service/ApiService.js";

export default function AddressPage() {

    const [address, setAddress] = useState({
        street: '',
        zipCode: '',
        city: '',
        country: ''
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/edit-address') {
            fetchUserInfo();
        }
    }, [location.pathname])

    const fetchUserInfo = async() => {
        try {
            const response = ApiService.getLoggedUser();
            if (response.user.address) {
                setAddress(response.user.address)
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message || "Unable to fetch user information ")
        }
    };



    return (
        <>
        <h1>Address Page</h1>

        </>
    )
}