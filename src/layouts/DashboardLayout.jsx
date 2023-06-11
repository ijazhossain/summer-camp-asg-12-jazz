import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import SectionCover from "../Pages/Shared/SectionCover/SectionCover";
import dashboardImg from "../assets/images/adminBg.jpg"
import useAuth from "../hooks/useAuth";
import userPic from '../assets/images/userPro.avif'
import { FaBars, FaBook, FaMoneyCheck, FaPaypal, FaTools } from "react-icons/fa";
const DashboardLayout = () => {
    const { user } = useAuth();
    // console.log(user);
    const isInstructor = false;
    const isAdmin = true;
    return (
        <div>
            <Header></Header>
            <SectionCover img={dashboardImg} title="DashBoard"></SectionCover>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <label htmlFor="my-drawer-2" className="btn mt-12 me-8 text-white bg-[#d1a054] hover:bg-black  ms-auto lg:hidden">
                        <FaBars></FaBars>
                    </label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-base-content bg-[#aba5a3] text-center">

                        <div className="my-5">
                            {user?.photoURL && <img className="rounded-full border-[3px]  border-[#b38b37] mx-auto w-[100px] h-[100px]" src={`${user?.photoURL}`} alt="" />}
                            {!user?.photoURL && <img className="rounded-full mx-auto w-[100px] h-[100px]" src={`${userPic}`} alt="" />}
                            <p className="mt-5 font-semibold text-xl">{user?.displayName && user?.displayName}</p>
                            <p className="mt-2 font-semibold text-xs">Email: {user?.email && user?.email}</p>
                        </div>

                        {/* For Students */}
                        <div className="space-y-4">
                            {(!isAdmin && !isInstructor) && <>
                                <li>
                                    <NavLink className="flex items-center justify-center focus:text-[#b38b37] text-white text-center " to="/dashboard/selectedClasses">
                                        <FaBook></FaBook>
                                        Selected Classes</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center justify-center focus:text-[#b38b37] text-white text-center " to="/dashboard/enrolledClasses">
                                        <FaMoneyCheck></FaMoneyCheck>
                                        Enrolled Classes</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center justify-center focus:text-[#b38b37] text-white text-center " to="/dashboard/paymentHistory">
                                        <FaPaypal></FaPaypal>
                                        Payment History</NavLink>
                                </li>
                            </>}
                            {/* For instructors */}
                            {isInstructor && <>
                                <li>
                                    <NavLink className="flex items-center justify-center focus:text-[#b38b37] text-white text-center " to="/dashboard/addClass">
                                        <FaBook></FaBook>
                                        Add class</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center justify-center focus:text-[#b38b37] text-white text-center " to="/dashboard/inspectorClass">
                                        <FaMoneyCheck></FaMoneyCheck>
                                        My classes</NavLink>
                                </li>

                            </>}
                            {/* For admin */}
                            {
                                isAdmin && <>
                                    <li>
                                        <NavLink className="flex items-center justify-center focus:text-[#b38b37] text-white text-center " to="/dashboard/manageClasses">
                                            <FaTools></FaTools>
                                            Manage Classes</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="flex items-center justify-center focus:text-[#b38b37] text-white text-center " to="/dashboard/inspectorClass">
                                            <FaMoneyCheck></FaMoneyCheck>
                                            Manage Users</NavLink>
                                    </li>
                                </>
                            }
                        </div>


                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;
{/* <button onClick={() => handleApprove(item._id)}
                                        className="capitalize block btn btn-xs cursor-pointer hover:bg-black mx-auto mb-2 bg-green-700 text-white ">approved</button>
                                    <button disabled={item.status === 'pending' && "true"} className="capitalize block btn btn-xs cursor-pointer hover:bg-black mb-2 bg-red-900 mx-auto text-white ">Deny</button>
                                    <button className="capitalize block btn btn-xs cursor-pointer bg-[#b38b37] text-white mx-auto hover:bg-black"> Send Feedback</button> */}


                                    // <button disabled={item.status === 'approved' && "true"} className="block btn btn-xs cursor-pointer hover:bg-black mx-auto mb-2 bg-green-400 text-white ">approved</button>
                                    // <button disabled={item.status === 'pending' && "true"} className="block btn btn-xs cursor-pointer hover:bg-black mb-2 bg-yellow-400 mx-auto text-white ">Deny</button>
                                    // <button className="block btn btn-xs cursor-pointer bg-primary text-white mx-auto "> Send Feedback</button>