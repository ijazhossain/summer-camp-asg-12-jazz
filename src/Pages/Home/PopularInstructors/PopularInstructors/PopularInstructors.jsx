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
        <Slide direction="right" duration="2000" className="my-12 lg:my-24" triggerOnce='true'>
            <div className="w-[80%] mx-auto">
                <HomeSectionTitle title="Meet Our Instructor" subTitle="Our Teachers" description="Discover a team of exceptional instructors at Musicine Summer Campaining Music School. From Grammy-nominated artists to renowned performers, their expertise will elevate your musical journey. Learn from the best in the industry, gain valuable insights, and excel in your passion for music."></HomeSectionTitle>

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