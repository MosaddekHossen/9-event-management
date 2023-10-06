import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/pages/home/Home";
import Error from "../components/pages/error/Error";
import Details from "../components/pages/details/Details";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: `/details/`,
                element: <Details></Details>
            }
        ]
    }
])

export default Router;