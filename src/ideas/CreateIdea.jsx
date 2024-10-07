import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function CreateIdea() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

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
        try {
            const response = await axios.post("http://localhost:8080/idea",
                data);
            console.log(response.data);
            if(response.data) {
                navigate('/ideas');
            }
        }catch (error) {
            console.error("Error submitting idea", error);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <>
            <h1>Create Idea</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <button>{isLoading ? "Submitting..." : "Create Idea"}</button>
            </form>


        </>
    )
}