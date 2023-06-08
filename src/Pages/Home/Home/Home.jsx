import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Musicine | Home</title>
            </Helmet>
            <h1 className="text-4xl">This is home</h1>
        </div>
    );
};

export default Home;