import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useEnrolledClasses from "../../../../hooks/useEnrolledClasses";


const PaymentHistory = () => {
    const [paidClasses] = useEnrolledClasses()
    console.log(paidClasses);
    return (
        <>
            <SectionTitle>Payment History</SectionTitle>
            <div className="overflow-x-auto mt-12 w-[90%] mx-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="bg-[#b38b37] text-white">
                        <tr>
                            <th>#</th>
                            <th className="text-center">Course Name</th>
                            <th className="text-center">Date</th>
                            <th className="text-center">Transaction Id</th>
                            <th className="text-end">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paidClasses.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td className="text-center">{item.name}</td>
                                <td className="text-center">{item.date.slice(0, 10)}</td>
                                <td className="text-blue-500 text-center">{item.transactionId}</td>
                                <td className="text-end">${item.price}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PaymentHistory;