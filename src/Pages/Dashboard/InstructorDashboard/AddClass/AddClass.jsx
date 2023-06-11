import { useForm } from "react-hook-form";
import { FaExclamationCircle } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
// console.log(image_hosting_token);

const AddClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                // console.log(imageData);
                if (imageData.success) {
                    const imageUrl = imageData.data.display_url;
                    // console.log(imageUrl);
                    const { name, instructor, instructorEmail, price, status, enrolledStudents, availableSeats, description } = data;
                    const newClass = {
                        name,
                        instructor,
                        instructorEmail,
                        image: imageUrl,
                        price: parseFloat(price),
                        status,
                        enrolledStudents: parseInt(enrolledStudents),
                        availableSeats: parseInt(availableSeats),
                        description
                    }
                    // console.log(newClass);
                    axiosSecure.post('/classes', newClass)
                        .then(data => {

                            console.log(('after posting new class', data.data.insertedId));
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success...',
                                    text: 'New class added successfully!',

                                })
                            }
                        })

                }
            })

        // const newClass = {
        //     data
        // }
    }
    return (
        <div className="w-[90%] mx-auto mt-12"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                <h2 className="text-3xl text-[#727475] font-semibold"> Please Add Your Class</h2>
                <p className="text-xs text-[#aba5a3]">Let&apos;s get started</p>
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-[#727475]">Instructor Name</span>
                    </label>
                    <input type="text"  {...register("instructor", { required: true })} readOnly defaultValue={user?.displayName} className="input input-bordered text-xs " />
                    {errors.instructor?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                        <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                        This field is required</p>}
                </div>
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-[#727475]">Instructor Email</span>
                    </label>
                    <input type="email"  {...register("instructorEmail", { required: true })} defaultValue={user?.email} className="input input-bordered text-xs" />
                    {errors.instructorEmail?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                        <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                        This field is required</p>}
                </div>
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-[#727475]">Class Name</span>
                    </label>
                    <input type="text"  {...register("name", { required: true })} placeholder="Enter your class name" className="input input-bordered text-xs " />
                    {errors.name?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                        <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                        This field is required</p>}
                </div>

                <div className="lg:flex items-center justify-center gap-5">
                    <div className="form-control w-full lg:w-1/2">
                        <label className="label ">
                            <span className="label-text text-[#727475]">Available Seats</span>
                        </label>
                        <input type="number"  {...register("availableSeats", {
                            required: true,

                        })} placeholder="Enter number of seats" min="5" max="80" className="input input-bordered text-xs" />
                        {errors.availableSeats?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                            <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                            This field is required</p>}
                    </div>
                    <div className="form-control  w-full lg:w-1/2">
                        <label className="label ">
                            <span className="label-text text-[#727475]">Enrolled students</span>
                        </label>
                        <input type="number"  {...register("enrolledStudents", { required: true })} readOnly defaultValue="0" className="input input-bordered text-xs" />
                        {errors.enrolledStudents?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                            <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                            This field is required</p>}
                    </div>
                </div>
                <div className="lg:flex items-center justify-center gap-5">
                    <div className="form-control lg:w-1/2">
                        <label className="label ">
                            <span className="label-text text-[#727475]">Price</span>
                        </label>
                        <input type="number"  {...register("price", {
                            required: true,

                        })} placeholder="Enter price" min="10" className="input input-bordered text-xs" />
                        {errors.price?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                            <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                            This field is required</p>}
                    </div>
                    <div className="form-control w-full lg:w-1/2">
                        <label className="label ">
                            <span className="label-text text-[#727475]">Status</span>
                        </label>
                        <input type="text"  {...register("status", {
                            required: true,

                        })} defaultValue="pending" className="input input-bordered text-xs" />
                        {errors.status?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                            <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                            This field is required</p>}

                    </div>
                </div>
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-[#727475]">Class Image</span>
                    </label>
                    <input type="file"  {...register("image", { required: true })} placeholder="Enter class image url" className="file-input file-input-bordered text-xs w-full" />
                    {errors.image?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                        <FaExclamationCircle className="text-sm "></FaExclamationCircle>
                        This field is required</p>}
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("description", {
                        required: true,
                    })} className="textarea textarea-bordered w-full textarea-lg text-xs" name="description" placeholder="Enter class description" required></textarea>
                    {errors.description?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                        <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                        This field is required</p>}

                </div>

                <div className="form-control mt-6">
                    <input type="submit" className="btn hover:bg-black text-white capitalize bg-[#b37b38]" value="Register" />

                </div>
            </form>
        </div>
    );
};

export default AddClass;