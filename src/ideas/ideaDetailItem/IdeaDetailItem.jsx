import {Link, useRouteLoaderData} from "react-router-dom";
import './IdeaDetailItem.css';

export default function IdeaDetailItem( ) {
    const idea = useRouteLoaderData('idea-detail');
    return(
            <article>
                <h1>Idea Detail Item</h1>
                <h2>title: { idea.title }</h2>
                <p>description: { idea.description }</p>
                <p>idea: { idea.ideaId}</p>
                <div className="buttons-box">
                    <Link to='..'>Back</Link>
                    <Link to="edit">Edit Idea</Link>
                </div>
            </article>
    )
}