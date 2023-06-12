import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from "react-icons/fa";
const SingleInstructor = ({ singleInstructor }) => {
    // console.log(singleInstructor);
    const { _id, name, email, image } = singleInstructor;
    return (
        <div className="relative">
            <img className="w-full" src={image} alt="" />
            <div className="absolute top-0 left-0  w-full h-full bg-black bg-opacity-25">
                <div className="absolute bottom-5 w-full ">
                    <h2 className="text-center  text-4xl text-white font-semibold">{name}</h2>
                    <p className="my-4 text-center text-white">{email}</p>
                    <div className="flex items-center justify-center">
                        <FaFacebook className="text-white mr-2 text-xl"></FaFacebook>
                        <FaTwitter className="text-white mr-2 text-xl"></FaTwitter>
                        <FaInstagram className="text-white mr-2 text-xl"></FaInstagram>
                        <FaSkype className="text-white mr-2 text-xl"></FaSkype>
                        <FaLinkedin className="text-white mr-2 text-xl"></FaLinkedin>
                        <FaPinterest className="text-white mr-2 text-xl"></FaPinterest>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;