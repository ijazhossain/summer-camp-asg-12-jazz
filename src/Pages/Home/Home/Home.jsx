import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopulaeClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors/PopularInstructors";
import Introduction from "../Introduction/Introduction";
import Paralex from "../Paralex/Paralex";
import Support from "../Support/Support";
import Programme from "../Programme/Programme";
import ChooseUs from "../ChooseUs/ChooseUs";
import Question from "../Question/Question";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Musicine | Home</title>
            </Helmet>
            <Banner></Banner>
            <Support></Support>
            <Introduction></Introduction>
            <PopularClasses></PopularClasses>
            <Paralex></Paralex>
            <Programme></Programme>
            <ChooseUs></ChooseUs>
            <PopularInstructors></PopularInstructors>
            <Question></Question>
        </div>
    );
};

export default Home;