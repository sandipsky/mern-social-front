import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
        ],
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
]);