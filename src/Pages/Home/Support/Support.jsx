import Supporter from "../../../components/Supporter/Supporter";
import supImg1 from '../../../assets/images/icons/Logo-1.png'
import supImg2 from '../../../assets/images/icons/Logo-2.png'
import supImg3 from '../../../assets/images/icons/Logo-3.png'
import supImg4 from '../../../assets/images/icons/Logo-4.png'
import Marquee from "react-fast-marquee";
const Support = () => {
    return (
        <div className="container w-[80%] mx-auto mt-24">
            <h2 className="text-center font-bold text-lg text-[#b38b37]">Supported By:</h2>
            <Marquee speed='150'>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mt-10 ">
                    <Supporter img={supImg4}></Supporter>
                    <Supporter img={supImg3}></Supporter>
                    <Supporter img={supImg2}></Supporter>
                    <Supporter img={supImg1}></Supporter>
                </div>
            </Marquee>

        </div>
    );
};

export default Support;