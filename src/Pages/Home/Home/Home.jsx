import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopulaeClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Musicine | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;