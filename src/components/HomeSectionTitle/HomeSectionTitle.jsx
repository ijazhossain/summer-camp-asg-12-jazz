import guiterImg from '../../assets/images/icons/guiter.png'
const HomeSectionTitle = ({ title, subTitle, description }) => {
    return (
        <>
            <h3 className=" text-center text-xl text-[#b38b37]  mt-12 font-bold mb-6 flex items-center lg:justify-center">
                <img className='w-6 mr-2' src={guiterImg} alt="guitar icon" />
                {subTitle}</h3>
            <h1 className="text-semibold lg:text-center text-4xl lg:text-7xl text-[#1a1919]">{title}</h1>
            <p className="text-[#757575] text-[17px] lg:text-center mt-6 lg:w-[90%] leading-loose mx-auto">{description} </p>
        </>

    );
};

export default HomeSectionTitle;