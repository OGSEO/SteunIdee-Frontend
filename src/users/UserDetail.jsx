import {useParams} from "react-router-dom";
import axios from "axios";
import UserDetailItem from "./UserDetailItem.jsx";

export default function UserDetail() {
    const params =useParams();
    console.log(params);
    return (
        <>
            <h1>User Details</h1>
            <p>{params.userId}</p>
            <UserDetailItem />
        </>
    )
}

export async function userDetailLoader( {params}) {
    const userId = params.userId;
    console.log(userId);
    const response = await axios.get('http://localhost:8080/user/' + userId);
    console.log(response);

    if(response.status !== 200) {
        throw {message: "Kon niet fetchen MyG"};
    } else {
        return response.data;
    }
}