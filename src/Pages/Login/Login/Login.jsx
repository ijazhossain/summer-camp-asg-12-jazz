import SectionCover from "../../Shared/SectionCover/SectionCover";
import logImg from '../../../assets/images/login.jpg'
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaExclamationCircle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const Login = () => {

    const { login } = useAuth();
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.from?.state?.pathname || '/'
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setError('')
        // console.log(data)
        login(data.email, data.password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: 'Login successful!',

                })
                navigate(from, { replace: true });

            }).catch(error => {
                // console.log(error.message);
                setError(error.message)
            })
    };
    return (
        <div>
            <Helmet>
                <title>Musicine | Login</title>
            </Helmet>
            <SectionCover img={logImg} title="Login"></SectionCover>
            <div className="container lg:w-[50%] mx-auto text-center">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                    <h2 className="text-3xl text-[#727475] font-semibold">Welcome Back</h2>
                    <p className="text-xs text-[#aba5a3]">Please enter your details</p>
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-[#727475]">Email</span>
                        </label>
                        <input type="text"  {...register("email", { required: true })} placeholder="Enter your Email" className="input input-bordered text-xs" />
                        {errors.email?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                            <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                            This field is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#727475]">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} placeholder="Enter your password" className="input input-bordered text-xs" />
                        {errors.email?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                            <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                            This field is required</p>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn hover:bg-black text-white capitalize bg-[#b37b38]" value="Login" />

                    </div>
                </form>
                <SocialLogin>Log in with Google</SocialLogin>
                <p className='mt-3 text-xs text-start px-8'>Do not have an account? <Link to="/registration" className='text-[#b37b38] font-semibold '>Sign up for free</Link></p>
                <p className="text-xs text-red-500 font-semibold px-8 text-start mt-3">{error}</p>
            </div>

        </div>
    );
};

export default Login;