import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Classes from "../Pages/Classes/Classes/Classes";
import Instructor from "../Pages/Instructors/Instructor/Instructor";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/instructors',
                element: <Instructor></Instructor>
            },
            {
                path: '/classes',
                element: <Classes></Classes>

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
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>
    }
])
export default router;