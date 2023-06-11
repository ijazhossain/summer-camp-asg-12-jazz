import axios from "axios";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAllClasses from "../../../../hooks/useAllClasses";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const [allClasses, refetch] = useAllClasses()
    // console.log(allClasses);
    const handleStatus = (id, stat) => {
        console.log(id, stat);
        axios.patch(`http://localhost:5000/classes/admin/${id}`, { status: stat })
            .then(data => {
                console.log(data);
                if (data.data.modifiedCount > 0) {

                    Swal.fire({
                        icon: 'success',
                        title: 'Success...',
                        text: 'Class status set successfully',

                    })
                    refetch()
                }
            })
    }
    return (
        <div className="w-[90%] mx-auto">
            <SectionTitle>Manage Classes</SectionTitle>
            <div className="overflow-x-auto mt-12">
                <table className="table  table-zebra">
                    {/* head */}
                    <thead className="bg-[#727475]">
                        <tr>
                            <th className="font-semibold text-base text-white">#</th>
                            <th className="font-semibold text-base text-white">Class Image</th>
                            <th className="font-semibold text-base text-white">Name</th>
                            <th className="font-semibold text-base text-white">Instructor info</th>
                            <th className="font-semibold text-base text-white">Available seats</th>
                            <th className="font-semibold text-base text-white">Price</th>
                            <th className="font-semibold text-base text-white">Status</th>
                            <th className="font-semibold text-base text-white">Action</th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            allClasses.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>
                                    {item.instructor}
                                    <br />
                                    <span className="badge badge-ghost badge-sm bg-[#b38b37] text-white">{item.instructorEmail}</span>
                                </td>
                                <td className="text-center">{item.availableSeats}</td>
                                <td>${item.price}</td>
                                <td className="capitalize text-blue-500 font-semibold">{item.status}</td>

                                <th>
                                    <button onClick={() => handleStatus(item._id, 'approved')} disabled={(item.status === 'approved' || item.status === 'denied') && "true"} className="block btn btn-xs cursor-pointer hover:bg-black mx-auto mb-2 bg-green-400 text-white ">approved</button>
                                    <button onClick={() => handleStatus(item._id, 'denied')} disabled={(item.status === 'approved' || item.status === 'denied') && "true"} className="block btn btn-xs cursor-pointer hover:bg-black mb-2 bg-red-400 mx-auto text-white ">Deny</button>
                                    <button className="block btn btn-xs cursor-pointer bg-[#b38b37] text-white mx-auto "> Send Feedback</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClasses;