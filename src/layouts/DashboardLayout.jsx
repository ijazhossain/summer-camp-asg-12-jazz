import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import SectionCover from "../Pages/Shared/SectionCover/SectionCover";
import dashboardImg from "../assets/images/adminBg.jpg"
import useAuth from "../hooks/useAuth";
import userPic from '../assets/images/userPro.avif'
import { FaBars } from "react-icons/fa";
const DashboardLayout = () => {
    const { user } = useAuth();
    // console.log(user);
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

                        {user?.photoURL && <img className="rounded-full mx-auto w-[100px] h-[100px]" src={`${user?.photoURL}`} alt="" />}
                        {!user?.photoURL && <img className="rounded-full mx-auto w-[100px] h-[100px]" src={`${userPic}`} alt="" />}

                        {/* Sidebar content here */}
                        <Link className="focus:text-[#b38b37] text-white " to="/dashboard/selectedClasses">Selected Classes</Link>
                        <Link className="focus:text-[#b38b37] text-white " to="/dashboard/selectedClasses">Selected Classes</Link>
                        <Link className="focus:text-[#b38b37] text-white " to="/dashboard/selectedClasses">Selected Classes</Link>

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;