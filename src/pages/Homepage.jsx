import {Link} from "react-router-dom";

export default function Homepage() {
    return (
        <>
            <h1>Homepage</h1>
            <Link to='/ideas'>All Ideas</Link>
            <Link to='/ideas/new-idea'>Create an Idea</Link>
        </>
    )
}