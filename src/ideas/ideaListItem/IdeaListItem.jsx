import {Link} from "react-router-dom";
import './IdeaListItem.css';
import {useState} from "react";
import CreateComment from "../../comments/createComment/CreateComment.jsx";

export default function IdeaListItem({idea}) {
    const [isCommenting, setIsCommenting] = useState(false);

    function commentHandler() {
        setIsCommenting(true);
    }

    return (
        <li>
            <article>
                <div className='user-date-box'>
                    <div className='username'>
                        username
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
                    </div>
                    <div className='cta-box'>
                        <div>Like</div>
                        <div>Steun</div>
                        <div>
                            <button type='button' onClick={commentHandler}>
                                Make a comment
                            </button>
                        </div>
                    </div>
                    {isCommenting && <CreateComment/>}
                </div>
            </article>
        </li>
    )
}