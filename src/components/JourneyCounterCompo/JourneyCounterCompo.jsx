import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const JourneyCounterCompo = ({ number, title }) => {
    return (
        <>
            <div className="mx-auto">
                <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                    {({ isVisible }) =>
                        <p className='text-2xl lg:text-7xl text-[#b38b37] font-bold mb-3 text-center'> {isVisible ? <CountUp end={number}>
                        </CountUp> : 'null'}+</p>
                    }
                </VisibilitySensor>

                <p className='text-lg text-[#1a1919] font-semibold text-center'>{title}
                </p>
            </div>
        </>
    );
};

export default JourneyCounterCompo;