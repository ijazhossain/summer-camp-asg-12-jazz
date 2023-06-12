import { Link } from "react-router-dom";
import logo from '../../../../src/assets/images/footer-logo.png'
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useIsInstructor from "../../../hooks/useIsInstructor";

const Header = () => {
    const { user, logOut } = useAuth()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useIsInstructor()
    // console.log(isAdmin, isInstructor);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="relative">
            <div className="navbar  px-0 py-5 bg-transparent w-full z-10  absolute top-0 left-0 ">
                <div className="container w-[90%] mx-auto lg:flex items-center justify-between">
                    <div className=" flex items-center">
                        <div className="dropdown ms-primary border border-[#b38b37] rounded-lg me-4">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 p-2 shadow w-[450px] rounded-box text-center py-4 bg-[#727475] space-y-3">
                                <p><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/">Home</Link></p>
                                <p ><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/instructors">Instructors</Link></p>
                                <p><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#a78051]" to="/classes">Classes</Link></p>
                                {/*  student link */}
                                {(!isAdmin && !isInstructor) && <p ><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/dashboard/selectedClasses
                            ">Dashboard</Link></p>}
                                {/* admin link */}
                                {isAdmin && <p ><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/dashboard/manageClasses
                            ">Dashboard</Link></p>}
                                {/* instructor link */}
                                {isInstructor && <p ><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/dashboard/addClass
                            ">Dashboard</Link></p>}
                                <div className="text-center">
                                    {
                                        user && <span className="cursor-pointer tooltip" data-tip={user?.displayName}><img className='w-[60px] h-60px border-2 border-[#b37b38] rounded-full me-10' src={user.photoURL} alt="" /></span>
                                    }
                                </div>
                                {!user ? <Link to="/login" className="font-semibold me-10 btn px-10 capitalize hover:border-none hover:bg-[#b37b38] hover:text-white bg-transparent border border-[#b38b37] text-white ms-5">Login</Link>
                                    :
                                    <button onClick={handleLogOut} className="font-semibold btn px-10 capitalize hover:border-none hover:bg-[#b37b38] hover:text-white bg-transparent border border-[#b38b37] text-white ms-5">Logout</button>
                                }

                            </ul>
                        </div>
                        <Link to="/" className=" normal-case text-xl px-0 ">
                            <img className="h-[32px]" src={logo} alt="site logo" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex items-center">
                        <ul className="menu menu-horizontal px-1 lg:flex items-center">
                            <p><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/">Home</Link></p>
                            <p ><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/instructors">Instructors</Link></p>
                            <p><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#a78051]" to="/classes">Classes</Link></p>
                            {/*  student link */}
                            {(!isAdmin && !isInstructor) && <p ><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/dashboard/selectedClasses
                            ">Dashboard</Link></p>}
                            {/* admin link */}
                            {isAdmin && <p ><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/dashboard/manageClasses
                            ">Dashboard</Link></p>}
                            {/* instructor link */}
                            {isInstructor && <p ><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/dashboard/addClass
                            ">Dashboard</Link></p>}
                            {
                                user && <span className="cursor-pointer tooltip" data-tip={user?.displayName}><img className='w-[60px] h-60px border-2 border-[#b37b38] rounded-full me-10' src={user.photoURL} alt="" /></span>
                            }
                            {!user ? <Link to="/login" className="font-semibold me-10 btn px-10 capitalize hover:border-none hover:bg-[#b37b38] hover:text-white bg-transparent border border-[#b38b37] text-white ms-5">Login</Link>
                                :
                                <button onClick={handleLogOut} className="font-semibold btn px-10 capitalize hover:border-none hover:bg-[#b37b38] hover:text-white bg-transparent border border-[#b38b37] text-white ms-5">Logout</button>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;