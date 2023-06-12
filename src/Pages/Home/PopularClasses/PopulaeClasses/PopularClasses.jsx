import { useEffect, useState } from "react";
import HomeSectionTitle from "../../../../components/HomeSectionTitle/HomeSectionTitle";
import useClasses from "../../../../hooks/useClasses";
import Spinner from "../../../Shared/Spinner/Spinner";
import SinglePopularClass from "../SinglePopularClass/SinglePopularClass";

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
    console.log(popularClasses);
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className="w-[80%] mx-auto">
            <HomeSectionTitle>Popular Classes</HomeSectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" >
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