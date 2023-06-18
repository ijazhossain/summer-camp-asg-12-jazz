import guiterImg from '../../../assets/images/icons/guiter.png'
import chooseImg from '../../../assets/images/grade/choose.jpg'
import { FaBuilding, FaGuitar, FaUserFriends } from 'react-icons/fa';
const ChooseUs = () => {
    return (
        <div className="container w-[80%] mx-auto lg:flex items-center justify-between gap-16">
            <div className='w-full lg:w-[60%]'>
                <h3 className="text-start text-xl text-[#b38b37]  mt-12 font-bold mb-6 flex items-center ">
                    <img className='w-6 mr-2' src={guiterImg} alt="guitar icon" />
                    WHY CHOOSE US
                </h3>
                <h1 className="font-bold text-5xl lg:text-7xl text-[#1a1919] space-y-3">
                    <p>Why You Should</p>
                    <p>Choose Us</p>
                </h1>
                <p className="text-[#757575] text-[17px] mt-6  leading-loose mx-auto text-justify">Choose Musicine for an unparalleled musical experience that combines passion, expertise, and innovation. With our exceptional instructors, diverse course offerings, nurturing environment, and commitment to fostering musical growth, Musicine Summer Campaining Music School is the perfect choice to ignite your musical potential and embark on a transformative journey of artistic expression. </p>
                <div className='mt-12'>
                    <div className='flex items-start justify-between gap-8'>
                        <div>
                            <div className='w-[60px] h-[60px] bg-[#b38b37] rounded-full flex items-center justify-center'>
                                <FaGuitar className='text-2xl text-white'></FaGuitar>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Free Equipment
                            </h2>
                            <p className="text-[17px] text-[#757575] leading-loose ">Unlock your musical potential with access to state-of-the-art equipment and instruments provided free of charge at Musicine Summer Campaining Music School.</p>
                        </div>

                    </div>
                </div>
                <div className='mt-12'>
                    <div className='flex items-start justify-between gap-8'>
                        <div>
                            <div className='w-[60px] h-[60px] bg-[#b38b37] rounded-full flex items-center justify-center'>
                                <FaBuilding className='text-2xl text-white'></FaBuilding>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Music Studio

                            </h2>
                            <p className="text-[17px] text-[#757575] leading-loose ">Experience the perfect environment for musical creativity to flourish in our well-equipped and acoustically designed music studio at Musicine Summer Campaining Music School.</p>
                        </div>

                    </div>
                </div>
                <div className='mt-12'>
                    <div className='flex items-start justify-between gap-8'>
                        <div>
                            <div className='w-[60px] h-[60px] bg-[#b38b37] rounded-full flex items-center justify-center'>
                                <FaUserFriends className='text-2xl text-white'></FaUserFriends>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Expert Teacher

                            </h2>
                            <p className="text-[17px] text-[#757575] leading-loose ">Learn from the best in the industry and be inspired by our expert teachers, who bring a wealth of knowledge and experience to Musicine Summer Campaining Music School.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full lg:w-[40%] mt-12 lg:mt-0'>
                <img className="rounded-3xl" src={chooseImg} alt="banner image" />
            </div>


        </div>
    );
};

export default ChooseUs;