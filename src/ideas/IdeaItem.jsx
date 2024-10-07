export default function IdeaItem( { idea } ) {
    return(
        <li>
            <article>
                <h1>title: { idea.title }</h1>
                <p>description: { idea.description }</p>
            </article>
        </li>
    )
}