import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import './CreateIdea.css';
// import {useAuth} from "../../context/AuthContext.jsx";
import ApiService from "../../service/ApiService.js";

export default function CreateIdea() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    // const auth = useAuth();

    const {register, handleSubmit} = useForm({
            defaultValues: {
                title: '',
                description: ''
            },
            mode: "onTouched",
        }
    );

    async function onSubmit(data) {
        setIsLoading(true);
        // const {title, description} = data;
        // const sendData = {
        //     username: auth.user.username,
        //     title,
        //     description,
        // };
        try {
            const response = await ApiService.createIdea(data)
            console.log(response);
            if (response.statusCode === 200) {
                navigate('/ideas');
            }
        } catch (error) {
            console.error("Error submitting idea", error);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div className='create-idea-container'>
            <h1>Create Idea</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            {...register('title')}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            id="description"
                            {...register('description')}
                        />
                    </div>
                </div>

                <div className='buttons-box'>
                    <Link to="..">Cancel</Link>
                    <button>{isLoading ? "Submitting..." : "Create Idea"}</button>
                </div>
            </form>


        </div>
    )
}