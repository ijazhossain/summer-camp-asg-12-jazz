import introImg from '../../../assets/images/introImg.jpg'
const Introduction = () => {
    return (
        <div className='lg:flex items-start mt-12 justify-between container w-[80%] mx-auto gap-8'>
            <div className='w-full lg:w-1/2 '>

                <img className='w-full rounded-lg' src={introImg} alt="" />
            </div>
            <div className='w-full lg:w-1/2'>
                <p className='text-lg mb-4'>Introduction</p>
                <p className='text-5xl mb-4 text-[#727374]'>
                    We Help You to<br></br> Grow Faster and<br></br> Better
                </p>
                <p>Welcome to Musucine, the ultimate destination for young music enthusiasts to embark on an extraordinary summer camp adventure! At Musucine, we believe in the transformative power of music, and our camp is designed to inspire, educate, and nurture budding musicians. Through engaging workshops, immersive lessons, and unforgettable performances, campers will unlock their musical potential, forge lifelong friendships, and create memories that will last a lifetime. Join us at Musucine and let the rhythm of your heart guide you on a magical journey of melodies and harmonies!</p>
            </div>
        </div>
    );
};

export default Introduction;