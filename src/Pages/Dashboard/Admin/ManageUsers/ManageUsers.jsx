import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            // console.log(res);
            return res.data
        }

    })
    // console.log(users);
    const handleRole = (item, userRole) => {
        console.log(item, userRole);
        axios.patch(`https://summer-camp-server-asg-12.vercel.app/users/admin/${item._id}`, { role: userRole })
            .then(data => {
                console.log(data);
                if (data.data.modifiedCount > 0) {

                    Swal.fire({
                        icon: 'success',
                        title: 'Success...',
                        text: `${item?.name} is ${userRole} now`,

                    })
                    refetch()
                }
            })
    }
    return (
        <div className="w-[90%] mx-auto">
            <Helmet>
                <title>Musicine | Manage Users</title>
            </Helmet>
            <SectionTitle>Manage users</SectionTitle>
            <div className="overflow-x-auto mt-12">
                <table className="table  table-zebra">
                    {/* head */}
                    <thead className="bg-[#727475]">
                        <tr>
                            <th className="font-semibold text-base text-white">#</th>
                            <th className="font-semibold text-base text-white">Class Image</th>
                            <th className="font-semibold text-base text-white">User Info</th>
                            <th className="font-semibold text-base text-white">User Role</th>

                            <th className="font-semibold text-base text-white text-center">Action</th>
                            <th className="font-semibold text-base text-white text-center">Action</th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            users.map((item, index) => <tr key={item._id}>
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

                                <td>
                                    {item.name}
                                    <br />
                                    <span className="badge badge-ghost badge-sm bg-[#b38b37] text-white">{item.email}</span>
                                </td>
                                <td className="text-center capitalize text-blue-500 font-semibold">{item?.role ? item?.role : 'student'}</td>
                                <td><button onClick={() => handleRole(item, 'admin')} disabled={(item?.role === 'admin') && "true"} className="block btn btn-xs cursor-pointer hover:bg-black mx-auto mb-2 bg-red-500 text-white ">Make Admin</button></td>
                                <td>
                                    <button onClick={() => handleRole(item, 'instructor')} disabled={(item?.role === 'instructor') && "true"} className="block btn btn-xs cursor-pointer hover:bg-black bg-green-500  mb-2  mx-auto text-white ">Make instructor</button>
                                </td>

                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;