import { Link, useNavigate } from "react-router-dom";
import logo from '../../../../src/assets/images/footer-logo.png'
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useIsInstructor from "../../../hooks/useIsInstructor";
import { useEffect, useState } from "react";

const Header = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )
    const { user, logOut } = useAuth()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useIsInstructor()
    // console.log(isAdmin, isInstructor);
    // const isAdmin = true;
    // const isInstructor = false;
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleToggle = e => {
        if (e.target.checked) {
            setTheme("dark")
        } else { setTheme("light") }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])
    return (
        <div className="relative">
            <div className="navbar  px-0 py-5 bg-transparent w-full z-10  absolute top-0 left-0 ">
                <div className="container w-[90%] mx-auto lg:flex items-center justify-between">
                    <div className=" flex items-center">
                        <div className="dropdown ms-primary border border-[#b38b37] rounded-lg me-4">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 p-2 shadow w-[300px] rounded-box text-center py-4 bg-[#727475] space-y-3">
                                <p><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/">Home</Link></p>
                                <p ><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/instructors">Instructors</Link></p>
                                <p><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#a78051]" to="/classes">Classes</Link></p>
                                {/*  student link */}

                                {(!isAdmin && !isInstructor && user) && <p ><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/dashboard/selectedClasses
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

                            {(!isAdmin && !isInstructor && user) && <p ><Link className="font-semibold text-white me-10 text-[17px] focus:text-[#b37b38]" to="/dashboard/selectedClasses
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
                            {/* swap */}
                            <label className="swap swap-rotate text-[#b37b38] rounded-full text-xs">

                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" onChange={handleToggle}
                                    checked={theme === "light" ? false : true}
                                />

                                {/* sun icon */}
                                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* moon icon */}
                                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>


                            {!user ? <Link to="/login" className="font-semibold btn px-10 capitalize hover:border-none hover:bg-[#b37b38] hover:text-white bg-transparent border border-[#b38b37] text-white ms-5">Login</Link>
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