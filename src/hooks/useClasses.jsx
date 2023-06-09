import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useClasses = () => {
    const { data: classes = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/classes')
            // console.log(res);
            return res.data;
        }
    })
    return [classes, refetch, loading]
}
export default useClasses;