import {Link, useRouteLoaderData} from "react-router-dom";

export default function IdeaDetailItem( ) {
    const idea = useRouteLoaderData('idea-detail');
    return(
        <li>
            <article>
                <h1>Idea Detail Item</h1>
                <h2>title: { idea.title }</h2>
                <p>description: { idea.description }</p>
                <p>idea: { idea.ideaId}</p>
                <Link to="edit">Edit Idea</Link>
            </article>
        </li>
    )
}