import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../pages/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/allToys",
                element:<AllToys></AllToys>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
]);

export default router;