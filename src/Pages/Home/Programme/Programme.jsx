import HomeSectionTitle from "../../../components/HomeSectionTitle/HomeSectionTitle";
import ProgrammeCard from "../../../components/ProgrammeCard/ProgrammeCard";
import img1 from '../../../assets/images/grade/grade-1.jpg'
import img2 from '../../../assets/images/grade/grade-2.jpg'
import img3 from '../../../assets/images/grade/grade-3.jpg'
const Programme = () => {
    return (
        <div className="container w-[80%] mx-auto  my-12 lg:my-24 ">
            <HomeSectionTitle subTitle="OUR PROGRAM
" title="Grade Programs
" description="Excel in your musical journey with our Grade Programs at Musicine Summer Campaining Music School. Receive comprehensive training, personalized guidance, and prepare for music examinations with our experienced instructors."></HomeSectionTitle>
            <div className="grid lg:grid-cols-3 mt-14 gap-12">
                <ProgrammeCard img={img1} heading="Preschool" description="Nurture your child's love for music through our interactive preschool program at Musicine Summer Campaining Music School, sparking creativity and fostering early musical development."></ProgrammeCard>
                <ProgrammeCard img={img2} heading="Schooler" description="Elevate your musical skills and embark on an enriching journey of self-expression at our Schooler program, designed for aspiring musicians at Musicine Summer Campaining Music School."></ProgrammeCard>
                <ProgrammeCard img={img3} heading="Teenager" description="Unleash your artistic potential and forge lifelong connections in our empowering Teenager program, where aspiring musicians thrive at Musicine Summer Campaining Music School."></ProgrammeCard>
            </div>

        </div>
    );
};

export default Programme;