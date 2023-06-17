import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import useInspectorClass from "../../../../hooks/useInspectorClass";
import SingleInstructorClasses from "./SingleInstructorClasses/SingleInstructorClasses";


const InspectorClass = () => {

    const { user } = useAuth();
    console.log(user);
    const [inspectorClasses] = useInspectorClass()
    console.log(inspectorClasses)
    return (
        <>
            <Helmet>
                <title>Musicine | Instructor Classes </title>
            </Helmet>
            <div>
                <SectionTitle>My classes </SectionTitle>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 p-12">
                    {
                        inspectorClasses.map(item => <SingleInstructorClasses
                            key={item._id}
                            item={item}
                        ></SingleInstructorClasses>)
                    }
                </div>
            </div>
        </>

    );
};

export default InspectorClass;