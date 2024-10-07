import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function Register() {
    const [role, setRole ] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors},
    } =useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
        mode: "onTouched",
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setRole("ROLE_USER");
    }, []);

    const OnRegistrationHandler = async (data) => {
        setLoading(true);
        console.log(data);

        const {username, email, password} = data;
        const sendData = {
            username,
            email,
            password,
            role: [role]
        };

        console.log(sendData);

        try {
            const response = await axios.post('http://localhost:8080/auth/register', sendData )
            const resData = await response.data;
            console.log(response);
            console.log(resData);
            navigate("/login");
        } catch
            (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <h1>Registreren</h1>
            <form onSubmit={handleSubmit(OnRegistrationHandler)}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        {...register('username')}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email')}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password')}
                    />
                </div>
                <button>{loading ? "Submitting..." : "Registreren"}</button>
            </form>

            <p>Heb je al een account? Je kunt je <Link to="/login">hier</Link> inloggen.</p>
        </>
    )
}

export default Register;