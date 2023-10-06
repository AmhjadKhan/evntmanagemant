import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/Root"
import Home from "../Pages/Home/Home"
import About from "../Pages/ABOUT/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Regester from "../Pages/Regester/Regester";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<Root />,
        children: [
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/about',
                element:<About /> 
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/regester',
                element:<Regester />
            }
        ]
    }
])
export default routes;