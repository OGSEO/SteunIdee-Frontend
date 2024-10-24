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
                navigate("/login");
        } catch
            (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const onError = async (err) => {
        console.log(err);
    }

    return (
        <div className="register-container">
            <h2>Registreren</h2>
            <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit, onError)}>
                <TextField
                    label="Name"
                    error={errors.name}
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
                />
                <TextField
                    type="email"
                    label="Email"
                    error={errors.email}
                    {...register('email', {
                        required: "This field is required.",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Incorrect email format.",
                        }
                    })}
                />
                <TextField
                    type="password"
                    label="Password"
                    error={errors.password}
                    {...register('password', {
                        required: "This field is required."
                    })}
                />
                <div className="register-link">
                    <button className="btn">{loading ? "Submitting..." : "Registreren"}</button>
                    <small><Link className="btn-link" to="/login">Heb je al een account?</Link></small>
                </div>
            </form>
        </div>
    )
}

export default Register;