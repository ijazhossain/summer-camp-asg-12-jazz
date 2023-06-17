import { FaCheckCircle } from 'react-icons/fa';
import introImg from '../../../assets/images/introImg.jpg'
import { Bounce } from "react-awesome-reveal";
import IntroCounterCompo from '../../../components/IntroCounterCompo/IntroCounterCompo';
import guitarImg from '../../../assets/images/icons/guiter.png'
const Introduction = () => {
    return (
        <Bounce duration="2000" triggerOnce='true'>
            <div className='lg:flex items-start my-12 lg:my-24 justify-between container w-[80%] mx-auto gap-8 '>
                <div className='w-full lg:w-[60%] lg:px-5'>
                    <p className='mt-4 lg:mt-0 font-semibold text-xl mb-4 text-[#b38b37] flex items-center'>
                        <img className='w-6 mr-2' src={guitarImg} alt="" />
                        Introduction
                    </p>
                    <h1 className='font-bold mb-8 text-3xl lg:text-7xl  text-[#1a1919]'>
                        <p className='inline lg:block'> We Help You To</p>


                        <p className='my-5 inline lg:block '> Grow Faster and </p>
                        <p className='inline lg:block'>  Better</p>
                    </h1>
                    <img className='w-full rounded-lg mb-8 lg:mb-0' src={introImg} alt="" />
                </div>
                <div className='w-full lg:w-[40%]'>

                    <p className='text-[18px] text-[#757575] lg:mt-12 text-justify'><span className='text-4xl'>W</span>elcome to Musucine, the ultimate destination for young music enthusiasts to embark on an extraordinary summer camp adventure! At Musucine, we believe in the transformative power of music, and our camp is designed to inspire, educate, and nurture budding musicians. Through engaging workshops, immersive lessons, and unforgettable performances, campers will unlock their musical potential, forge lifelong friendships, and create memories that will last a lifetime. Join us at Musucine and let the rhythm of your heart guide you on a magical journey of melodies and harmonies!</p>
                    <ul className='text-lg text-[#757575] my-12 space-y-3'>
                        <li className='flex items-center'>
                            <FaCheckCircle className='mr-2 text-[#b38b37]'></FaCheckCircle>
                            Quality services and support all time</li>
                        <li className='flex items-center'>
                            <FaCheckCircle className='mr-2 text-[#b38b37]'></FaCheckCircle>
                            Expert team member</li>
                        <li className='flex items-center'>
                            <FaCheckCircle className='mr-2 text-[#b38b37]'></FaCheckCircle>
                            Lifetime online support</li>

                    </ul>
                    <button className='rounded-lg bg-[#b38b37] text-white px-8 py-4 text-lg'>More About Us</button>
                    <div className='hidden lg:grid  grid-cols-3 mt-16 gap-8'>
                        <IntroCounterCompo number="250" title="Project Done
"></IntroCounterCompo>
                        <IntroCounterCompo number="640" title="Satisfied Client"></IntroCounterCompo>
                        <IntroCounterCompo number="800" title="User Active"></IntroCounterCompo>
                    </div>
                </div>
            </div>
        </Bounce>
    );
};

export default Introduction;