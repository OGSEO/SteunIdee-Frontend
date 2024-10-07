import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import CreateIdea from "./ideas/CreateIdea.jsx";
import AllIdeas, {ideasLoader} from "./ideas/AllIdeas.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        children : [
            { index: true, element: <Homepage /> },
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
