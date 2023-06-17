import { Slide } from "react-awesome-reveal";


const SinglePopularClass = ({ item }) => {
    const { name, image, price, instructor, instructorEmail, description } = item;
    return (
        <Slide direction="left" cascade duration="2000" triggerOnce='true'>
            <div className="card  bg-[#e9e9e9] border shadow-lg ">
                <figure><img src={image} alt="class pic" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge bg-[#efa64e] text-white">$ {price}</div>
                    </h2>
                    <p className="text-sm mb-0">Instructor: {instructor}</p>
                    <p className="text-xs mt-0">Email: {instructorEmail}</p>
                    <p className="tooltip text-xs text-start mb-3" data-tip={description}>{description.slice(0, 100) + '...'}</p>

                </div>
            </div>
        </Slide>
    );
};

export default SinglePopularClass;