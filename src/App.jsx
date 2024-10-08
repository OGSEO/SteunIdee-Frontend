import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import CreateIdea from "./ideas/CreateIdea.jsx";
import AllIdeas, {ideasLoader} from "./ideas/AllIdeas.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import Register from "./pages/Register.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";
import AllUsers, {usersLoader} from "./users/AllUsers.jsx";
import IdeaDetail, {ideaDetailLoader} from "./ideas/IdeaDetail.jsx";
import UserDetail, {userDetailLoader} from "./users/UserDetail.jsx";
import EditIdea from "./ideas/EditIdea.jsx";
import PostAvatar from "./PostAvatar.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthProvider><RootLayout /></AuthProvider>,
        errorElement: <ErrorPage />,
        children : [
            { index: true, element: <Homepage /> },
            { path: 'register', element: <Register /> },
            { path: 'login', element: <Login /> },
            // { path: 'post-avatar', element: <PostAvatar /> },

            {
                path: 'ideas',
                children: [
                    {
                        index: true,
                        element: <AllIdeas />,
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

            {
                path: 'users',
                children: [
                    {
                        index: true,
                        element: <AllUsers />,
                        loader: usersLoader
                    },
                    { path: ':userId', element: <UserDetail />, loader: userDetailLoader },
                    { path: ':userId/avatar', element: <PostAvatar /> }
                ]
            }

        ]
    }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
