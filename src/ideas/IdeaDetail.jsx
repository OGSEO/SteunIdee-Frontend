import {useParams} from "react-router-dom";
import IdeaDetailItem from "./IdeaDetailItem.jsx";
import axios from "axios";

export default function IdeaDetail() {
    const params =useParams();


    return (
        <>
            <h1>Idea Details</h1>
            <p>{params.ideaId}</p>
            <IdeaDetailItem/>
        </>
    )
}

export async function ideaDetailLoader( {params}) {
    const ideaId = params.ideaId;
    console.log(ideaId);
    const response = await axios.get('http://localhost:8080/idea/' + ideaId);
    console.log(response);

    if(response.status !== 200) {
        throw {message: "Kon niet fetchen MyG"};
    } else {
        return response.data;
    }
}