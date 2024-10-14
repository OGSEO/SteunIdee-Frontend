import IdeaListItem from "../ideaListItem/IdeaListItem.jsx";
import {useLoaderData} from "react-router-dom";
import './IdeaList.css';
import ApiService from "../../service/ApiService.js";

export default function IdeaList() {

    const ideas = useLoaderData();
    console.log(ideas);

    return (
        <div className='idea-list-container'>
            <ul>
                {ideas.map(
                    (idea) => (
                        <IdeaListItem key={idea.id} idea={idea}/>
                    )
                )}
            </ul>
        </div>
    )
}

export async function ideasLoader() {
    const response = await ApiService.getAllIdeas();
    console.log(response);

    if(response.statusCode !== 200) {
        throw {message: "Kon niet fetchen MyG"};
    } else {
        return response.ideaList;
    }
}