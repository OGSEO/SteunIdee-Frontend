import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext({});

export function AuthProvider({children}) {

    const [auth, setAuth] = useState({
        isAuthenticated: false,
        user: null,
        status: 'pending',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("JWT_TOKEN");

        // if (token && isTokenValid()) {
        if (token) {
            const decoded = jwtDecode(token);
            void fetchUserData(decoded.sub, token);
        } else {
            setAuth({
                isAuthenticated: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(newToken) {
        localStorage.setItem("JWT_TOKEN", newToken);

        const decoded = jwtDecode(newToken);

        void fetchUserData(decoded.sub, newToken, '/ideas');
    }

    function logout() {
        localStorage.clear();
        setAuth({
            isAuthenticated: false,
            user: null,
            status: 'done'
        });
        console.log('gebruiker is uitgelogd');
        navigate('/');
    }

    async function fetchUserData(username, token, redirectUrl) {
        try {
            const result = await axios.get(`http://localhost:8080/user/username/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(result);
            setAuth({
                isAuthenticated: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.userId,
                },
                status: 'done',
            });

            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (error) {
            console.log(error);
            setAuth({
                isAuthenticated: false,
                user: null,
                status: 'done'
            });
        }
    }

    const contextData = {
        ...auth,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )

};

export function useAuth() {
    return useContext(AuthContext);
};