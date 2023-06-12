import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useIsInstructor from "../hooks/useIsInstructor";



const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isInstructor, isInstructorLoading] = useIsInstructor()
    if (loading || isInstructorLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (isInstructor && user) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace />
};

export default InstructorRoute;