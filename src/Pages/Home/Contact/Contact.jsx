import { FaEnvelope, FaPhone } from 'react-icons/fa';
import contactImg from '../../../assets/images/grade/contact.jpg'
import guiterImg from '../../../assets/images/icons/guiter.png'

const Contact = () => {
    return (
        <div className="container w-[80%] mx-auto lg:flex items-center justify-between gap-16 my-12 lg:my-24">
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

                <div className='mt-12 grid grid-cols-2 lg:grid-cols-3'>
                    <div className='flex flex-col items-start'>
                        <div className='flex items-center justify-center w-[60px] h-[60px] bg-[#b38b37] rounded-full mb-4'>
                            <FaPhone className='text-2xl text-white '></FaPhone>
                        </div>
                        <h2 className="text-3xl font-bold mb-2">Phone:
                        </h2>
                        <p className='text-[#757575] text-lg font-semibold'>+62 812 345 678</p>
                    </div>
                    <div className='hidden lg:block'>

                    </div>
                    <div className='flex flex-col items-start'>
                        <div className='flex items-center justify-center w-[60px] h-[60px] bg-[#b38b37] rounded-full mb-4'>
                            <FaEnvelope className='text-2xl text-white'></FaEnvelope>
                        </div>
                        <h2 className="text-3xl font-bold mb-2">Email:

                        </h2>
                        <p className='text-[#757575] text-lg font-semibold'>info@tokomoo.com</p>
                    </div>
                    <button className='mt-12 rounded-lg bg-[#b38b37] text-white px-8 py-4 text-lg font-semibold'>Send A Message</button>
                </div>

            </div>
            <div className='w-full lg:w-[40%] mt-12 lg:mt-0'>
                <img className="rounded-3xl" src={contactImg} alt="banner image" />
            </div>


        </div>
    );
};

export default Contact;