import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/Root"
import Home from "../Pages/Home/Home"
import About from "../Pages/ABOUT/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Regester from "../Pages/Regester/Regester";
import Error from "../Pages/Error/Error";
import Medicalde from "../Pages/Home/medicaldetails/Medicalde";
import Blog from "../Pages/blog/Blog";
import Dashboard from "../Pages/dashboard/Dashboard";
import PrivateRote from "./PrivateRote";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<Root />,
        errorElement:<Error />,
        children: [
            {
                path:'/',
                element:<Home />,
                loader:() => fetch('/Data.json')
            },
            {
                path:'/medical/:id',
                element:<PrivateRote><Medicalde /></PrivateRote>,
                loader:() => fetch('/Data.json')
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
               path:'/Blog',
               element:<PrivateRote><Blog /></PrivateRote>
            },
            {
                path:'/dashboard',
                element:<PrivateRote><Dashboard /></PrivateRote>
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