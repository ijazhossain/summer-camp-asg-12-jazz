import SectionTitle from "../../../../../components/SectionTitle/SectionTitle";
import useEnrolledClasses from "../../../../../hooks/useEnrolledClasses";

const EnrolledClasses = () => {
    const [paidClasses, refetch] = useEnrolledClasses()
    console.log(paidClasses);
    return (
        <div className="w-[90%] mx-auto">
            <SectionTitle>Enrolled classes</SectionTitle>
            <div className="overflow-x-auto mt-12">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor info</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            paidClasses.map((item, index) => <tr key={item._id}>
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
                                    <span className="badge badge-ghost badge-sm">{item.instructorEmail}</span>
                                </td>

                                <th>
                                    <button className="btn cursor-auto hover:bg-success bg-success text-white btn-xs">paid</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;