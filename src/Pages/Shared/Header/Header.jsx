import { Link } from "react-router-dom";
import logo from '../../../../src/assets/images/footer-logo.png'
import useAuth from "../../../hooks/useAuth";

const Header = () => {
    const { user, logOut } = useAuth()
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
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/instructors">Instructors</Link></li>
                                <li><Link to="/classes">Classes</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link></li>

                            </ul>
                        </div>
                        <Link to="/" className=" normal-case text-xl px-0 ">
                            <img className="h-[32px]" src={logo} alt="site logo" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex items-center">
                        <ul className="menu menu-horizontal px-1 lg:flex items-center">
                            <p><Link className="text-white me-10 text-[17px] focus:text-[#b37b38]" to="/">Home</Link></p>
                            <p ><Link className="text-white me-10 text-[17px] focus:text-[#b37b38]" to="/instructors">Instructors</Link></p>
                            <p><Link className="text-white me-10 text-[17px] focus:text-[#b37b38]" to="/classes">Classes</Link></p>
                            <p ><Link className="text-white me-10 text-[17px] focus:text-[#b37b38]" to="/dashboard">Dashboard</Link></p>
                            {
                                user && <span className="cursor-pointer tooltip" data-tip={user?.displayName}><img className='w-[60px] h-60px border border-[#b37b38] rounded-full me-10' src={user.photoURL} alt="" /></span>
                            }
                            {!user ? <Link to="/login" className="me-10 btn px-10 capitalize hover:border-none hover:bg-[#b37b38] hover:text-white bg-transparent border border-[#b38b37] text-white ms-5">Login</Link>
                                :
                                <button onClick={handleLogOut} className="btn px-10 capitalize hover:border-none hover:bg-[#b37b38] hover:text-white bg-transparent border border-[#b38b37] text-white ms-5">Logout</button>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;