import {useForm} from "react-hook-form";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import './Register.css';
import ApiService from "../../service/ApiService.js";

function Register() {
    // const [role, setRole] = useState('');
    const params = useParams();
    // const { role } = params;

    const [message,setMessage] = useState(null);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
        mode: "onTouched",
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (params.role === 'politici') {
    //         setRole("admin");
    //     }
    // }, []);

    const OnRegistrationHandler = async (data) => {
        setLoading(true);
        console.log(data);

        const {name, email, password} = data;
        const sendData = {
            name,
            email,
            password,
            // role: [sendRole]
        };

        try {
            const response = await ApiService.registerUser(sendData)
            console.log(response);
            setMessage("User Successfully Registered")
            setTimeout(() => {

                navigate("/login");
            }, 2000)
        } catch
            (error) {
            console.log(error);
            setMessage("Unable to Register")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="register-container">
            <h1>Registreren</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit(OnRegistrationHandler)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name')}
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
        </div>
    )
}

export default Register;