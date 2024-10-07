import {useForm} from "react-hook-form";
import axios from "axios";
import {useState} from "react";
import {useAuth} from "../context/AuthContext.jsx";


function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();


    const { register,
        handleSubmit, formState: {errors},} =useForm({
        defaultValues: {
            username: '',
            password: '',
        },
        mode: "onTouched",
    });


    const onLoginHandler= async (data) => {
        setIsLoading(true);
        try {
            const result = await axios.post("http://localhost:8080/auth/login",
                data
            );
            console.log(result);
            console.log(result.data);
            login(result.data.jwtToken);

        }catch(error) {
            console.log(error)
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
            <form onSubmit={handleSubmit(onLoginHandler)}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        {...register('username')}
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