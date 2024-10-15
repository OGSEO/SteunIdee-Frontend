import {useForm} from "react-hook-form";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import './Register.css';
import ApiService from "../../service/ApiService.js";
import {TextField} from "../../components/controls/textField/TextField.jsx";

function Register() {
    // const [role, setRole] = useState('');
    const params = useParams();
    // const { role } = params;

    const [message, setMessage] = useState(null);

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
        mode: "onSubmit",
        reValidateMode: "onSubmit"
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (params.role === 'politici') {
    //         setRole("admin");
    //     }
    // }, []);

    const onSubmit = async (data) => {
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

    const onError = async (err) => {
        console.log(err);
    }

    return (
        <div className="register-container">
            <h1>Registreren</h1>
            {message && <p>{message}</p>}
            <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit, onError)}>
                <TextField
                    label="Name"
                    {...register('name', {
                        minLength: {
                            value: 6,
                            message: "Must be min 6 characters"
                        },
                        maxLength: {
                            value: 20,
                            message: "Must be max 20 characters"
                        },
                        required: "This field is required."
                    })}
                    error={errors.name}
                />
                <TextField
                    type="email"
                    label="Email"
                    {...register('email', {
                        required: "This field is required.",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Incorrect email format.",
                        }
                    })}
                    error={errors.email}
                />
                <TextField
                    type="password"
                    label="Password"
                    {...register('password', {
                        required: "This field is required."
                    })}
                    error={errors.password}
                />
                <button>{loading ? "Submitting..." : "Registreren"}</button>
            </form>

            <p>Heb je al een account? Je kunt je <Link to="/login">hier</Link> inloggen.</p>
        </div>
    )
}

export default Register;