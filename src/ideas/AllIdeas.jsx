import axios from "axios";
import IdeaItem from "./IdeaItem.jsx";
import {useLoaderData} from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";

export default function AllIdeas() {
    const { user } = useAuth()
    console.log(user);

    const ideas = useLoaderData();

    return (
        <>
            <h1>All Ideas</h1>
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
            <h2>{user.id}</h2>
            <ul>
                {ideas.map(
                    (idea) => (
                        <IdeaItem key={idea.ideaId} idea={idea}/>
                    )
                )}
            </ul>
        </>
    )
}

export async function ideasLoader() {
    const response = await axios.get("http://localhost:8080/idea");

    if(response.status !== 200) {
        throw {message: "Kon niet fetchen MyG"};
    } else {
        return response.data;
    }
}