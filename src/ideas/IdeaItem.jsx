import {Link} from "react-router-dom";

export default function IdeaItem( { idea }) {

    return(
        <li>
            <article>
                <h1>title: { idea.title }</h1>
                <p>description: { idea.description }</p>
                <Link to={`${idea.ideaId}`}>Idea Detail</Link>
            </article>
        </li>
    )
}