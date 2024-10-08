export default function UserItem( { user } ) {
    return(
        <li>
            <article>
                <h1>UserId: { user.userId }</h1>
                <p>Username: { user.username }</p>
                <p>Email: {user.email}</p>
            </article>
        </li>
    )
}