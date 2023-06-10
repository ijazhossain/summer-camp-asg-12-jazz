import { Link } from "react-router-dom";


const SingleSelectedClass = ({ selectedClass }) => {
    // console.log(selectedClass);
    const { _id, classId, image, instructor, name, studentEmail, price, instructorEmail, description } = selectedClass;
    return (
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
                <div className="card-actions justify-end">
                    <Link to={`/dashboard/payment/${_id}`}>
                        <button className="btn btn-xs bg-[#e9cc74] text-white">Pay</button></Link>
                    <button className="btn btn-xs bg-red-400 text-white" >Remove</button>
                </div>
            </div>
        </div>
    );
};

export default SingleSelectedClass;