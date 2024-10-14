import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link, useNavigate, useParams, useRouteLoaderData} from "react-router-dom";
import './EditIdea.css';
import ApiService from "../../service/ApiService.js";

export default function EditIdea() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { ideaId} = useParams();
    const idea = useRouteLoaderData('idea-detail');

    const {register, handleSubmit} = useForm({
            defaultValues: {
                title: `${idea.title}`,
                description: ''
            },
            mode: "onTouched",
        }
    );

    async function onSubmit(data) {
        setIsLoading(true);
        console.log(ideaId)
        try {
            const response = await ApiService.updateIdea(ideaId, data)
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
        <div className='edit-idea-container'>
            <h1>Edit Idea</h1>
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
                <div className='buttons-box'>
                    <Link to="..">Cancel</Link>
                    <button>{isLoading ? "Submitting..." : "Edit Idea"}</button>
                </div>
            </form>
        </div>
    )
}