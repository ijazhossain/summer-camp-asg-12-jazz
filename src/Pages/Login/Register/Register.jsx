import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import SectionCover from "../../Shared/SectionCover/SectionCover";
import { useForm } from "react-hook-form";
import registerImg from '../../../assets/../assets/images/register.jpg'
import { FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)


    };
    return (
        <div>
            <SectionCover img={registerImg} title="Register"></SectionCover>
            <div className="container w-[50%] mx-auto text-center">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                    <h2 className="text-3xl text-[#727475] font-semibold">Create an account</h2>
                    <p className="text-xs text-[#aba5a3]">Let&apos;s get started</p>
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-[#727475]">Name</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} placeholder="Enter your Email" className="input input-bordered text-xs" />
                        {errors.name?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                            <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                            This field is required</p>}
                    </div>

                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-[#727475]">Photo url</span>
                        </label>
                        <input type="text"  {...register("photoUrl", { required: true })} placeholder="Enter your Email" className="input input-bordered text-xs" />
                        {errors.photoUrl?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                            <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                            This field is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-[#727475]">Email</span>
                        </label>
                        <input type="email"  {...register("email", { required: true })} placeholder="Enter your Email" className="input input-bordered text-xs" />
                        {errors.email?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                            <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                            This field is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-[#727475]">Address</span>
                        </label>
                        <input type="text"  {...register("address", { required: true })} placeholder="Enter your Address" className="input input-bordered text-xs" />
                        {errors.address?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                            <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                            This field is required</p>}
                    </div>
                    <div className="flex items-center justify-between gap-5">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Gender</span>

                            </label>
                            <select {...register("gender", { required: true })} className="select select-bordered">
                                <option disabled defaultValue="Gender">Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>

                        </div>

                        <div className="form-control w-1/2">
                            <label className="label ">
                                <span className="label-text text-[#727475]">Phone number</span>
                            </label>
                            <input type="phone"  {...register("phoneNumber", { required: true })} placeholder="Enter your phone number" className="input input-bordered text-xs" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-[#727475]">Password</span>
                        </label>
                        <input type="password"  {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern: /(?=(.*[A-Z]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,}/
                        })} placeholder="Enter your password" className="input input-bordered text-xs" />
                        {errors.password?.type === 'minLength' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                            <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                            Password must be six or more character long</p>}
                        {errors.password?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                            <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                            This field is required</p>}
                        {errors.password?.type === 'pattern' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                            <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                            Password must contain one number and a special character</p>}
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" className="btn hover:bg-black text-white capitalize bg-[#b37b38]" value="Login" />

                    </div>
                </form>
                <SocialLogin>Log in with Google</SocialLogin>
                <p className='mt-3 text-xs text-start px-8'>Already have an account? <Link to="/login" className='text-[#b37b38] font-semibold '>Login</Link></p>
            </div>

        </div>
    );
};

export default Register;