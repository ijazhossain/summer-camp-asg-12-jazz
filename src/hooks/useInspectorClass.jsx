import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInspectorClass = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: inspectorClasses = [], refetch } = useQuery({
        queryKey: ['inspectorClass'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructorClasses?email=${user?.email}`)
            console.log('inspector class', res.data);
            return res.data
        }
    })
    return [inspectorClasses, refetch]
}
export default useInspectorClass;