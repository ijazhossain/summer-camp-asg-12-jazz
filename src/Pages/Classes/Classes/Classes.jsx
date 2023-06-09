import { Helmet } from "react-helmet-async";
import useClasses from "../../../hooks/useClasses";
import SectionCover from "../../Shared/SectionCover/SectionCover";
import coverImg from '../../../assets/images/classcover.jpg'
import SingleClass from "../SingleClass/SingleClass";


const Classes = () => {
    const [classes] = useClasses();
    console.log(classes);
    return (
        <div className="">
            <Helmet>
                <title>Musicine | Classes</title>
            </Helmet>
            <SectionCover img={coverImg} title="Classes"></SectionCover>
            <div className="container w-[90%] mx-auto grid lg:grid-cols-3 gap-7 my-24 ">
                {
                    classes.map(singleClass => <SingleClass
                        key={singleClass._id} singleClass={singleClass}
                    ></SingleClass>)
                }
            </div>

        </div>
    );
};

export default Classes;