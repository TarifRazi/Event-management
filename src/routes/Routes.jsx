import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EventDetails from "../pages/EventDetails/EventDetails";
import PrivatRoute from "./PrivatRoute";
import Bookings from "../pages/Bookings";
import About from "../pages/About";
import Contact from "../pages/Contact";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('../../public/Events.json')
            },
            {
                path:'/allEvents/:id',
                element: <PrivatRoute><EventDetails></EventDetails></PrivatRoute>,
                loader: () => fetch('../../public/Events.json')
            },
            {
                path:'/about',
                element: <PrivatRoute><About></About></PrivatRoute>,
                loader: () => fetch('../../public/Events.json')
            },
            {
                path:'/bookings',
                element: <PrivatRoute><Bookings></Bookings></PrivatRoute>,
                loader: () => fetch('../../public/Events.json')
            },
            {
                path:'/contact',
                element: <PrivatRoute><Contact></Contact></PrivatRoute>
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

export default routes