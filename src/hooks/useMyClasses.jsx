import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

const useMyClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: myClasses = [], refetch: cartRefetch } = useQuery({
        queryKey: ['myClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            // console.log(res);
            return res.data;
        }
    })
    return [myClasses, cartRefetch]
}
export default useMyClasses;