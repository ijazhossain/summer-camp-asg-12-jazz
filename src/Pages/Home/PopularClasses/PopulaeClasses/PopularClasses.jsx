import { useEffect, useState } from "react";
import HomeSectionTitle from "../../../../components/HomeSectionTitle/HomeSectionTitle";
import useClasses from "../../../../hooks/useClasses";
import Spinner from "../../../Shared/Spinner/Spinner";
import SinglePopularClass from "../SinglePopularClass/SinglePopularClass";
import { Fade, Slide } from "react-awesome-reveal";

const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://summer-camp-server-asg-12.vercel.app/approvedClasses')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPopularClasses(data);
                setLoading(false)
            })
    }, [])
    // console.log(popularClasses);
    if (loading) {
        return <Spinner></Spinner>
    }
    return (

        <div className="w-[90%] lg:w-[80%] mx-auto container  my-12 lg:my-24 ">
            <HomeSectionTitle subTitle="Our Class" title="Our Popular Class" description="Explore a diverse selection of courses at Musicine Summer Campaining Music School. From Guitar Grooves to Percussion Powerhouse and Vocal Vibrations, ignite your musical passion. Learn, create, and perform with fellow enthusiasts in an inspiring environment."></HomeSectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16" >
                {
                    popularClasses.slice(0, 6).map(item => <SinglePopularClass
                        key={item._id}
                        item={item}></SinglePopularClass>)
                }
            </div>

        </div>

    );
};

export default PopularClasses;