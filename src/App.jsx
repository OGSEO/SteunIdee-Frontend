import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import CreateIdea from "./ideas/CreateIdea.jsx";
import AllIdeas, {ideasLoader} from "./ideas/AllIdeas.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import Register from "./pages/Register.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthProvider><RootLayout /></AuthProvider>,
        errorElement: <ErrorPage />,
        children : [
            { index: true, element: <Homepage /> },
            { path: 'register', element: <Register /> },
            { path: 'login', element: <Login /> },
            {
                path: 'ideas',
                children: [
                    {
                        index: true,
                        element: <AllIdeas />,
                        loader: ideasLoader
                    },
                    { path: 'new-idea', element: <CreateIdea /> }
                ]
            }
        ]
    }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
