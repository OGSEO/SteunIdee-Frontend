import {Link, useRouteLoaderData} from "react-router-dom";
import './IdeaDetailItem.css';

export default function IdeaDetailItem( ) {
    const idea = useRouteLoaderData('idea-detail');
    console.log(idea);
    return(
            <article>
                <h2>{ idea.title }</h2>
                <p>{ idea.description }</p>
                <div className="buttons-box">
                    <Link to='..'>Back</Link>
                    <Link to="edit">Edit Idea</Link>
                </div>
            </article>
    )
}