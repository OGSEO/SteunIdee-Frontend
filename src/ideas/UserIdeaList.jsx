import ApiService from "../service/ApiService.js";
import {useLoaderData} from "react-router-dom";


export default function UserIdeaList() {

    const ideas = useLoaderData();
    console.log(ideas);

    return (
        <>
        <h1>User Idea List</h1>
        </>
    )
}

export async function userIdeasLoader( {params }) {
    const {userId} = params;
    console.log(userId);

    const response = await ApiService.getAllIdeasFromUser(userId);
    console.log(response);

    if(response.statusCode !== 200) {
        throw {message: "Kon niet fetchen MyG"};
    } else {
        return response.ideaList;
    }
}