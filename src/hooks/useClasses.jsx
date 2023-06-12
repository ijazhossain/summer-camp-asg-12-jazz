import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useClasses = () => {
    const { data: classes = [], refetch, isLoading: classesLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('https://summer-camp-server-asg-12.vercel.app/approvedClasses')
            // console.log(res);
            return res.data;

        }
    })
    return [classes, refetch, classesLoading]
}
export default useClasses;