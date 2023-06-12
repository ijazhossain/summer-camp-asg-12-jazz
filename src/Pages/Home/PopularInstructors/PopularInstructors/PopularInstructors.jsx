import useInstructor from "../../../../hooks/useInstructors";

const PopularInstructors = () => {
    const [instructors] = useInstructor();
    console.log(instructors);
    return (
        <div>

        </div>
    );
};

export default PopularInstructors;