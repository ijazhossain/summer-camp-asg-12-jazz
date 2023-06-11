import SectionTitle from "../../../../../components/SectionTitle/SectionTitle";
import useMyClasses from "../../../../../hooks/useMyClasses";
import SingleSelectedClass from "../SingleSelectedClass/SingleSelectedClass";

const SelectedClasses = () => {
    const [myClasses] = useMyClasses()
    // console.log(myClasses);
    return (
        <div>
            <SectionTitle>Selected Classes</SectionTitle>
            <div className="grid grid-cols-3 gap-7 p-12">
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