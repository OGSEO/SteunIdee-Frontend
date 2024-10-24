import './CommentListItem.css';

export default function CommentListItem({comment}) {
    return(
        <>
            <h3>{comment.name}</h3>
<p>content: {comment.content}</p>

        </>
    )
}