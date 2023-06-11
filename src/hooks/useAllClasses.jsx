import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllClasses = () => {
    const { data: allClasses = [], refetch, isLoading: allClassesLoading } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/classes')
            // console.log(res);
            return res.data;

        }
    })
    return [allClasses, refetch, allClassesLoading]
}
export default useAllClasses;