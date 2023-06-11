import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: paidClasses = [], refetch } = useQuery({
        queryKey: ['paidClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/paidClasses?email=${user?.email}`)
            console.log(user.email);
            // console.log(res);
            return res.data;
        }
    })
    return [paidClasses, refetch]
}
export default useEnrolledClasses;