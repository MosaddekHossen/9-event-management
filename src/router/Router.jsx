import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/pages/home/Home";
import Error from "../components/pages/error/Error";
import Details from "../components/pages/details/Details";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import PrivateRoute from "../components/private/PrivateRoute";
import Testimonial from "../components/pages/testimonial/Testimonial";
import Blog from "../components/pages/blog/Blog";
import Default from "../components/pages/default/Default";

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
            },
            {
                path: '/testimonial',
                element: <PrivateRoute><Testimonial></Testimonial></PrivateRoute>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/details',
                element: <Default></Default>
            }
        ]
    }
])

export default Router;