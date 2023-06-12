import { Navigate } from "react-router-dom";
import Spinner from "../Pages/Shared/Spinner/Spinner";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    console.log('admin', user);
    const [isAdmin, isAdminLoading] = useAdmin()
    if (loading || isAdminLoading) {
        return <Spinner></Spinner>
    }
    if (isAdmin && user) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace />
};

export default AdminRoute;