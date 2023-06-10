import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../Home/Home/Home";
import DashboardLayout from "../../layouts/DashboardLayout";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Classes from "../Classes/Classes/Classes";
import Instructor from "../Instructors/Instructor/Instructor";
import SelectedClasses from "../Dashboard/StudentDashboard/SelectedClasses/SelectedClasses/SelectedClasses";
import PrivateRoutes from "../../Routes/PrivateRoutes";


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
                path: '/registration',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: 'selectedClasses',
                element: <SelectedClasses></SelectedClasses>

            }
        ]
    }
])
export default router;