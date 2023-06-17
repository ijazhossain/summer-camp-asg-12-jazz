import { FaArrowRight } from "react-icons/fa";

const ProgrammeCard = ({ img, heading, description }) => {
    return (
        <div>
            <img className="rounded-2xl mb-5 w-full" src={img} alt="card img" />
            <div className="pl-2">
                <h2 className="text-3xl font-bold text-[#727374] mb-4">{heading}</h2>
                <p className="text-[#757575] ">{description}</p>
                <button className="flex items-center btn-link no-underline mt-6 text-lg text-[#b38b37]"><p>Read More</p>
                    <FaArrowRight className="ml-2"></FaArrowRight>
                </button>
            </div>
        </div>
    );
};

export default ProgrammeCard;