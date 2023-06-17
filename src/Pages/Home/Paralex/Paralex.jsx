import bgImg from '../../../assets/images/paralex.jpg'
import CounterCompo from '../../../components/CounterCompo/CounterCompo';

const Paralex = () => {
    return (
        <div className="relative" style={{
            backgroundImage: `url("${bgImg}")`,
            height: '400px',
            backgroundSize: 'cover',
            backgroundPosition: '0px -280px',
            marginTop: '80px',
            backgroundAttachment: 'fixed'
        }}>
            <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex items-center justify-start">
                <div className='w-[80%] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0'>
                    <CounterCompo number="100" title="Award Winning"></CounterCompo>
                    <CounterCompo number="500" title="Our Equipments"></CounterCompo>
                    <CounterCompo number="250" title="Field Expertise"></CounterCompo>
                    <CounterCompo number="50" title="Locations"></CounterCompo>
                </div>
            </div>

        </div>
    );
};

export default Paralex;