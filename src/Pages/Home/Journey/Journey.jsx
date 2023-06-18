import guiterImg from '../../../assets/images/icons/guiter.png'
import JourneyCounterCompo from '../../../components/JourneyCounterCompo/JourneyCounterCompo';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const Journey = () => {
    return (
        <div className="container w-[80%] mx-auto lg:flex items-center justify-between gap-16 my-12 lg:my-24">
            <div className='w-full lg:w-[60%]'>
                <h3 className="text-start text-xl text-[#b38b37]  mt-12 font-bold mb-6 flex items-center ">
                    <img className='w-6 mr-2' src={guiterImg} alt="guitar icon" />
                    OUR JOURNEY
                </h3>
                <h1 className="font-bold text-5xl lg:text-7xl text-[#1a1919] space-y-3">
                    <p>Trusted by 600+</p>
                    <p>Happy Students</p>
                </h1>
                <p className="text-[#757575] text-[17px] mt-6  leading-loose mx-auto text-justify">Embark on an extraordinary musical journey with Musicine, where passion meets creativity, and talent finds its voice. From inspiring lessons to exhilarating performances, Musicine takes you on a transformative experience, empowering you to explore, learn, and grow in the world of music. Unleash your potential, forge lifelong connections, and let the rhythm of your journey with Musicine guide you towards new horizons of musical expression and fulfillment. </p>


            </div>
            <div className='w-full lg:w-[40%] mt-12 lg:mt-0'>
                <div className='grid grid-cols-2 gap-10 lg:mt-12'>
                    <div>
                        <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                            {({ isVisible }) =>
                                <p className='text-2xl lg:text-7xl text-[#b38b37] font-bold mb-3 text-center'> {isVisible ? <CountUp end="75">
                                </CountUp> : 'null'}k+</p>
                            }
                        </VisibilitySensor>

                        <p className='text-lg text-[#1a1919] font-semibold text-center'>Satisfied Students

                        </p>
                    </div>
                    <JourneyCounterCompo number="100
" title="Expert Instructor
"></JourneyCounterCompo>
                    <JourneyCounterCompo number="50" title="Locations"></JourneyCounterCompo>
                    <JourneyCounterCompo number="15" title="Selectable Class
"></JourneyCounterCompo>
                </div>

            </div>


        </div>
    );
};

export default Journey;