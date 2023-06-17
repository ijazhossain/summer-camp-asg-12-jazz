
const SectionCover = ({ img, title }) => {
    return (
        <div className="relative" style={{
            backgroundImage: `url("${img}")`,
            height: '400px',
            backgroundSize: 'cover',
            backgroundPosition: ' bottom',
        }}>
            <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex items-end justify-start">
                <h1 className="w-[75%] mx-auto pb-10 text-5xl lg:text-7xl font-bold text-[#b38b37]">{title}</h1>
            </div>

        </div>
    );
};

export default SectionCover;