

const IntroCounterCompo = ({ number, title }) => {
    return (
        <>
            <div className="mx-auto">
                <p className='text-2xl lg:text-5xl text-[#b38b37] font-bold mb-3 text-center'> {number}+</p>
                <p className='text-lg text-[#1a1919] font-semibold text-center'>{title}
                </p>
            </div>
        </>
    );
};

export default IntroCounterCompo;