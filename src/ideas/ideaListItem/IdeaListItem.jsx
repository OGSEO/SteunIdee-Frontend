import {Link, useNavigate} from "react-router-dom";
import './IdeaListItem.css';
import {useEffect, useState} from "react";
import CreateComment from "../../comments/createComment/CreateComment.jsx";
import ApiService from "../../service/ApiService.js";
import CommentList from "../../comments/commentList/CommentList.jsx";
import ErrorPage from "../../pages/ErrorPage.jsx";
import LikeBox from "../../components/likeBox/LikeBox.jsx";
import PostActionButton from "../../components/UI/postActionButton/PostActionButton.jsx";
import {BsChatRightText} from "react-icons/bs";

export default function IdeaListItem({idea}) {
    const [isCommenting, setIsCommenting] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [comments, setComments] = useState([]);

    // const navigate = useNavigate();

    useEffect(() => {

        async function fetchComments() {
            setIsLoading(true);
            try {
                console.log(idea.id);
                const response = await ApiService.getAllComments(idea.id);
                console.log(response);
                if (response.statusCode !== 200) {
                    throw new Error("Failed fetching commentos!");
                }
                if (response.statusCode === 200) {
                    setComments(response.commentList)
                }


            } catch (error) {
                setError({
                    message: error.message || "Could not FETCH comments!!!"
                })
            } finally {
                setIsLoading(false);
            }
        }

        fetchComments();
    }, [idea.id]);


    // if (error) {
    //     return <ErrorPage/>
    // }

    function commentHandler() {
        setIsCommenting(!isCommenting);
    }

    return (
        <li>
            <article>
                <div className='user-date-box'>
                    <div className='username'>
                        {idea.user.name}
                    </div>
                    <div className='date'>
                        Geplaatst op: {idea.createdAt}
                    </div>
                </div>
                <div className='info-box'>
                    <div>
                        <Link className='idea-title' to={`${idea.id}`}>{idea.title}</Link>
                    </div>
                    <div className='idea-description'>
                        {idea.description}
                        <Link className="more-link" to={`${idea.id}`}> <span>   ...meer</span></Link>
                    </div>
                    <div className="like-comment-box">
                        <div className="like-box">likes: {idea.userLikes.length}</div>
                        <div className="comment-box">comments: {comments.length}</div>
                    </div>
                    <div className='cta-box'>
                        <div>
                            <LikeBox idea={idea}/>
                        </div>
                        <div>Steun</div>
                        <div>
                            <PostActionButton label="Commentaar" clickEvent={commentHandler} icon={<BsChatRightText/>}/>
                        </div>
                    </div>
                    {isCommenting && <CreateComment idea={idea}/>}
                    <CommentList comments={comments}/>

                </div>
            </article>
        </li>
    )
}