const SingleInstructorClasses = ({ item }) => {
    console.log(item);
    const { image, instructor, name, instructorEmail, description, enrolledStudents, price, status } = item;
    return (
        <div className="card bg-[#e9e9e9] border shadow-lg ">
            <figure><img src={image} alt="class pic" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge bg-[#efa64e] text-white">$ {price}</div>
                </h2>
                <p className="text-sm mb-0">Instructor: {instructor}</p>
                <p className="text-xs mt-0">Email: {instructorEmail}</p>
                <p className="tooltip text-xs text-start mb-3" data-tip={description}>{description.slice(0, 100) + '...'}</p>
                <p className="text-xs mt-0">Enrolled students: {enrolledStudents}</p>
                <div className="card-actions justify-end mt-5">
                    <button className={`btn btn-xs ${status === 'approved' ? 'bg-green-500' : status === 'pending' ? 'bg-yellow-500' : status === 'denied' ? 'bg-red-500' : ''}  text-white`}>{status}</button>
                    <button className="btn btn-xs bg-[#b38b37]  text-white">update</button>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructorClasses;