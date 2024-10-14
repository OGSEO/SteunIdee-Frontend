import './CreateComment.css';
import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
// import {useAuth} from "../../context/AuthContext.jsx";
import ApiService from "../../service/ApiService.js";

export default function CreateComment() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    // const auth = useAuth();
    const {register, handleSubmit} = useForm({
            defaultValues: {
                content: '',
            },
            mode: "onTouched",
        }
    );

    async function onSubmit(data) {
        setIsLoading(true);
        // const {content} = data;
        // const sendData = {
        //     username: auth.user.username,
        //     content
        // };
        try {
            const response = await ApiService.createComment(data)
            console.log(response.data);
            if (response.data) {
                navigate('.');
            }
        } catch (error) {
            console.error("Error submitting comment", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        // <div className='comment-section'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='comment-section'>
                    <div>
                        {/*<label htmlFor="content"></label>*/}
                        <input
                            type="text"
                            id="content"
                            {...register('content')}
                        />
                    </div>
                    <button>{isLoading ? "Submitting..." : "Opmerking plaatsen"}</button>
                </div>

            </form>
        // </div>
    )
}