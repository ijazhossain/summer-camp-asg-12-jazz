import { Helmet } from "react-helmet-async";
import useInstructor from "../../../hooks/useInstructors";
import SectionCover from "../../Shared/SectionCover/SectionCover";
import bannerImg from '../../../assets/images/teacherBanner.jpg'
import SingleInstructor from "../SingleInstructor/SingleInstructor";
import Spinner from "../../Shared/Spinner/Spinner";

const Instructor = () => {
    const [instructors] = useInstructor()
    // console.log(instructors);

    return (
        <div>
            <Helmet>
                <title>Musicine | Instructors</title>
            </Helmet>
            <SectionCover img={bannerImg} title={"Teachers"}></SectionCover>
            <div className="container w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-24">
                {
                    instructors.map(singleInstructor => <SingleInstructor
                        key={singleInstructor._id}
                        singleInstructor={singleInstructor}

                    ></SingleInstructor>)
                }
            </div>
        </div>
    );
};

export default Instructor;