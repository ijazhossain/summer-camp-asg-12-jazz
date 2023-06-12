import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useInstructor = () => {
    const { data: instructors = [], refetch, isLoading: instructorLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('https://summer-camp-server-asg-12.vercel.app/instructors')
            console.log(res);

            return res.data;
        }
    })
    return [instructors, refetch, instructorLoading]
}
export default useInstructor;