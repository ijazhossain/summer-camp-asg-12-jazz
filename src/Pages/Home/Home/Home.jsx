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
import Contact from "../Contact/Contact";
import Journey from "../Journey/Journey";
import Update from "../Update/Update";


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
            <Journey></Journey>
            <PopularInstructors></PopularInstructors>
            <Question></Question>
            <Contact></Contact>
            <Update></Update>

        </div>
    );
};

export default Home;