// import {useParams} from "react-router-dom";
import IdeaDetailItem from "../ideaDetailItem/IdeaDetailItem.jsx";
import './IdeaDetail.css'
import ApiService from "../../service/ApiService.js";

export default function IdeaDetail() {
    // const params =useParams();


    return (
        <div className="idea-detail-container">
            <h1>Idea Details</h1>
            {/*<p>{params.ideaId}</p>*/}
            <IdeaDetailItem/>
        </div>
    )
}

export async function ideaDetailLoader( {params}) {
    const ideaId = params.ideaId;
    console.log(ideaId);
    const response = await ApiService.getIdeaById(ideaId);
    console.log(response);

    if(response.status !== 200) {
        throw {message: "Kon niet fetchen MyG"};
    } else {
        return response.data;
    }
}