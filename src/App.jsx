import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import CreateIdea from "./ideas/createIdea/CreateIdea.jsx";
import IdeaList, {ideasLoader} from "./ideas/ideaList/IdeaList.jsx";
import RootLayout from "./layout/rootLayout/RootLayout.jsx";
import Register from "./pages/register/Register.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
// import AllUsers, {usersLoader} from "./users/AllUsers.jsx";
import IdeaDetail, {ideaDetailLoader} from "./ideas/ideaDetail/IdeaDetail.jsx";
// import UserDetail, {userDetailLoader} from "./users/UserDetail.jsx";
import EditIdea from "./ideas/editIdea/EditIdea.jsx";
// import PostAvatar from "./PostAvatar.jsx";
import UserLayout from "./layout/userLayout/UserLayout.jsx";
import ProfilePage from "./pages/profilePage/ProfilePage.jsx";
import AddressPage from "./pages/addressPage/AddressPage.jsx";
import {ProtectedRoute} from "./service/Guard.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        // element: <AuthProvider><RootLayout /></AuthProvider>,
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children : [
            { index: true, element: <Homepage /> },
            // { path: 'register', element: <Register /> },
            { path: 'register/:role', element: <Register />},
            { path: 'login', element: <Login /> },
            { path: 'profile', element: <ProfilePage /> },
            // { path: 'profile', element: <ProtectedRoute element: {<ProfilePage />} /> },
            { path: 'add-address', element: <AddressPage /> },
            { path: 'edit-address', element: <AddressPage /> },
            {
                path: 'ideas',
                element: <UserLayout />,
                children: [
                    {
                        index: true,
                        element: <IdeaList />,
                        loader: ideasLoader
                    },
                    { path: 'new-idea', element: <CreateIdea /> },
                    {
                        path: ':ideaId',
                        id: 'idea-detail',
                        loader: ideaDetailLoader,
                        children: [
                            {
                                index: true,
                                element:<IdeaDetail />,
                            },
                            {
                                path: 'edit',
                                element: <EditIdea />,
                            },
                        ]
                    },
                ]
            },

            // {
            //     path: 'users',
            //     children: [
            //         {
            //             index: true,
            //             element: <AllUsers />,
            //             loader: usersLoader
            //         },
            //         { path: ':userId', element: <UserDetail />, loader: userDetailLoader },
            //         { path: ':userId/avatar', element: <PostAvatar /> }
            //     ]
            // }

        ]
    }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
