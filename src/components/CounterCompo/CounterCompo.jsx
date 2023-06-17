import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CounterCompo = ({ number, title }) => {
    return (
        <div>

            <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                {({ isVisible }) =>
                    <p className='text-5xl lg:text-7xl text-[#b38b37] font-bold mb-4 text-center'> {isVisible ? <CountUp end={number}>
                    </CountUp> : 'null'}+</p>
                }
            </VisibilitySensor>


            <p className='text-lg text-white font-semibold text-center'>{title}</p>
        </div>
    );
};

export default CounterCompo;