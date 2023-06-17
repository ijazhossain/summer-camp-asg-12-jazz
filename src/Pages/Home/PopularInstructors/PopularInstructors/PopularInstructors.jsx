import { useEffect, useState } from "react";
import Spinner from "../../../Shared/Spinner/Spinner";
import SinglePopularInstructor from "../SinglePopularInstructor/SinglePopularInstructor";
import HomeSectionTitle from "../../../../components/HomeSectionTitle/HomeSectionTitle";
import { Fade, Slide } from "react-awesome-reveal";


const PopularInstructors = () => {
    const [popularInstructor, setPopularInstructor] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://summer-camp-server-asg-12.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPopularInstructor(data);
                setLoading(false)
            })
    }, [])
    // console.log(popularClasses);
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <Slide direction="right" duration="2000" className="my-24" triggerOnce='true'>
            <div className="w-[80%] mx-auto">
                <HomeSectionTitle>Popular Instructors</HomeSectionTitle>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12" >
                    {
                        popularInstructor.slice(0, 6).map(item => <SinglePopularInstructor
                            key={item._id}
                            item={item} />)
                    }
                </div>

            </div>
        </Slide>
    );
};

export default PopularInstructors;