import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../../components/SectionTitle/SectionTitle";
import useMyClasses from "../../../../../hooks/useMyClasses";
import SingleSelectedClass from "../SingleSelectedClass/SingleSelectedClass";

const SelectedClasses = () => {

    const [myClasses] = useMyClasses()
    // console.log(myClasses);
    return (
        <div>
            <Helmet>
                <title>Musicine | Selected Classes</title>
            </Helmet>
            <SectionTitle>Selected Classes</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 p-12">
                {
                    myClasses.map(selectedClass => <SingleSelectedClass
                        key={selectedClass._id}
                        selectedClass={selectedClass}
                    ></SingleSelectedClass>)
                }
            </div>
        </div>
    );
};

export default SelectedClasses;