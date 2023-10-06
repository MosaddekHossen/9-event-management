import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/pages/home/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default Router;