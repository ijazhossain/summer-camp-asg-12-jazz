import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allClasses = [], refetch, isLoading: allClassesLoading } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get('https://summer-camp-server-asg-12.vercel.app/classes')
            // console.log(res);
            return res.data;

        }
    })
    return [allClasses, refetch, allClassesLoading]
}
export default useAllClasses;