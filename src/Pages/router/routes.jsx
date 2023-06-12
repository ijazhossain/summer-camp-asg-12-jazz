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
import Payment from "../Dashboard/StudentDashboard/Payment/Payment/Payment";
import EnrolledClasses from "../Dashboard/StudentDashboard/EnrolledClasses/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";
import AddClass from "../Dashboard/InstructorDashboard/AddClass/AddClass";
import InspectorClass from "../Dashboard/InstructorDashboard/InspectorClass/InspectorClass";
import ManageClasses from "../Dashboard/Admin/ManageClasses/ManageClasses";
import Feedback from "../Dashboard/Admin/Feedback/Feedback";
import ManageUsers from "../Dashboard/Admin/ManageUsers/ManageUsers";
import AdminRoute from "../../Routes/AdminRoute";
import InstructorRoute from "../../Routes/InstructorRoute";




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

            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'enrolledClasses',
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            // inspector route
            {
                path: 'addClass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'inspectorClass',
                element: <InstructorRoute><InspectorClass></InspectorClass></InstructorRoute>

            },
            // admin routes
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'feedback/:id',
                element: <AdminRoute><Feedback></Feedback></AdminRoute>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]
    }
])
export default router;