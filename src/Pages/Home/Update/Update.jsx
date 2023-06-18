import guiterImg from '../../../assets/images/icons/guiter.png'
import img from '../../../assets/images/grade/contact-form.jpg'
const Update = () => {
    return (
        <div className="relative container w-[80%] mx-auto rounded-3xl" style={{
            backgroundImage: `url("${img}")`,
            height: '400px',
            backgroundSize: 'cover',
            backgroundPosition: ' bottom',
        }}>
            <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center rounded-3xl ">
                <div className='w-[75%] mx-auto py-12 overflow-scroll lg:overflow-auto'>
                    <h3 className=" text-center text-xl text-[#b38b37]  font-bold mb-6 flex items-center justify-center">
                        <img className='w-6 mr-2' src={guiterImg} alt="guitar icon" />
                        LET&rsquo;S JOIN US
                    </h3>
                    <h1 className="font-bold text-center text-4xl  text-white">Be an Expert With Us</h1>
                    <p className="text-white text-[17px] text-center mt-6 lg:w-[90%] leading-loose mx-auto">Join us at Musicine and become part of a vibrant community of music enthusiasts. Unleash your musical potential, connect with fellow artists, and embark on an unforgettable journey of self-expression and growth. </p>
                    <div className='mt-8 lg:mt-12'>
                        <input className='w-full lg:w-[70%] bg-white px-5 h-[50px] me-5 rounded-lg' type="email" placeholder='Email' required />
                        <button className='btn w-full lg:w-[20%] bg-[#b38b37] border-none text-white h-[50px] mt-4 lg:mt-0'>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Update;