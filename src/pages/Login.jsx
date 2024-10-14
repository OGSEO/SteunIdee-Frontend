import {useForm} from "react-hook-form";
import {useState} from "react";
// import {useAuth} from "../context/AuthContext.jsx";
import ApiService from "../service/ApiService.js";
import {useNavigate} from "react-router-dom";


function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    // const { login } = useAuth();
    const [message,setMessage] = useState(null);


    const { register,
        handleSubmit, formState: {errors},} =useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: "onTouched",
    });


    const onLoginHandler= async (data) => {
        setIsLoading(true);
        console.log(data);
        try {
            const response = await ApiService.loginUser(data);
            console.log(response);
            localStorage.setItem("JWT_TOKEN", response.token);
            localStorage.setItem("ROLE", response.role);
            await ApiService.loginUser(data);
            setMessage("Successfully Logged In")
            setTimeout(() => {

                navigate("/ideas");
            }, 2000)
        }catch(error) {
            console.log(error)
            setMessage("Unable to Login")
        } finally {
            setIsLoading(false)
        }
    }


    // useEffect(() => {
    //     if(auth.isAuthenticated) navigate('/');
    // }, [navigate, auth]);


    return (
        <>
            <h1>Login</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit(onLoginHandler)}>
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
                <button>{isLoading ? "loading..." : "Submit"}</button>
            </form>
        </>
    )
}


export default Login;