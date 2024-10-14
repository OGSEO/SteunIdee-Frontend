// import axios from "axios";
// import {useLoaderData} from "react-router-dom";
// // import {useAuth} from "../context/AuthContext.jsx";
// import UserItem from "./UserItem.jsx";
//
// export default function AllUsers() {
//     // const { user } = useAuth()
//     console.log(user);
//
//     const users = useLoaderData();
//
//     return (
//         <>
//             <h1>All Users</h1>
//             <h2>{user.email}</h2>
//             <h2>{user.id}</h2>
//             <ul>
//                 {users.map(
//                     (user) => (
//                         <UserItem key={user.userId} user={user}/>
//                     )
//                 )}
//             </ul>
//         </>
//     )
// }
//
// export async function usersLoader() {
//     const response = await axios.get("http://localhost:8080/user");
//
//     if(response.status !== 200) {
//         throw {message: "Kon niet fetchen MyG"};
//     } else {
//         return response.data;
//     }
// }