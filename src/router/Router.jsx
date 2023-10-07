import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/pages/home/Home";
import Error from "../components/pages/error/Error";
import Details from "../components/pages/details/Details";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import PrivateRoute from "../components/private/PrivateRoute";

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
                path: `/details/:id`,
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Router;