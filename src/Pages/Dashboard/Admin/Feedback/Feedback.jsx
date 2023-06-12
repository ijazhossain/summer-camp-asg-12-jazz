import { useParams } from "react-router-dom";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaExclamationCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
const Feedback = () => {
    const { id } = useParams();
    console.log(id);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const { feedback } = data;
        console.log(feedback);
        axios.patch(`https://summer-camp-server-asg-12.vercel.app/classes/updateFeedback/admin/${id}`, { feedback: feedback })
            .then(data => {
                console.log(data);
                if (data.data.modifiedCount > 0) {

                    Swal.fire({
                        icon: 'success',
                        title: 'Success...',
                        text: 'Feedback send successfully',

                    })

                }
            })
    }
    return (
        <div>
            <SectionTitle>Please write your feedback</SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] mx-auto mt-12">
                <div>
                    <label className="label">
                        <span className="label-text ps-1 font-semibold text-lg"> Feedback</span>
                    </label>
                    <textarea {...register("feedback", {
                        required: true,
                    })} className="textarea textarea-bordered w-full textarea-lg text-sm" rows='10' name="feedback" placeholder="Write your feedback here..."></textarea>
                    {errors.feedback?.type === 'required' && <p className="flex items-center mt-3 text-red-500 font-light text-xs text-start ps-2">
                        <FaExclamationCircle className="text-sm me-1"></FaExclamationCircle>
                        This field is required</p>}


                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn hover:bg-black text-white capitalize bg-[#b37b38]" value="Send Feedback" />

                </div>
            </form>
        </div>
    );
};

export default Feedback;