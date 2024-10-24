import {BsSuitHeart, BsSuitHeartFill} from "react-icons/bs";
import ApiService from "../../service/ApiService.js";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import PostActionButton from "../UI/postActionButton/PostActionButton.jsx";

export default function LikeBox({idea}) {
    const [likedIdea, setLikedIdea] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        // Hier pak ik de array met objs om te kijken of de user deze idea al heeft geliked!
        const userLikes = idea.userLikes;

        // hier controleer ik of er al geliked is
        let result = userLikes.some(item => item.id === idea.user.id);

        // hier set ik de state van dit idea
        setLikedIdea(result);

    }, []);

    async function likeHandler() {
        const ideaId = idea.id;
        const userId = idea.user.id
        const data = {ideaId, userId};

        try {
            const response = await ApiService.createLike(data)
            console.log(response);
            if (response.statusCode === 200) {
                setLikedIdea(true);
                navigate('/ideas');
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function unLikeHandler() {
        // const userId = idea.user.id;
        const ideaId = idea.id;
        const userId = idea.user.id
        const data = {ideaId, userId};

        try {
            const response = await ApiService.createUnLike(data)
            console.log(response);
            if (response.statusCode === 200) {

                setLikedIdea(false);
                navigate('/ideas');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
                {likedIdea ? (
                    <PostActionButton label="Interessant" icon={<BsSuitHeartFill/>} clickEvent={unLikeHandler} className="liked"/>
                ) : (
                    <PostActionButton label="Interessant" icon={<BsSuitHeart/>} clickEvent={likeHandler}/>
                )}
        </>
    )
}