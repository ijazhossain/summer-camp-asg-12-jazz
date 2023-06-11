import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useClasses = () => {
    const { data: classes = [], refetch, isLoading: classesLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/approvedClasses')
            // console.log(res);
            return res.data;

        }
    })
    return [classes, refetch, classesLoading]
}
export default useClasses;