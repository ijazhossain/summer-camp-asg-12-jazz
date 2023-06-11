
import axios from 'axios';
import seatIcon from '../../../assets/images/icon-availability.svg'
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

import { useLocation, useNavigate } from 'react-router-dom';
const SingleClass = ({ singleClass }) => {
    const { user } = useAuth();
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(user);
    // console.log(singleClass);
    const { _id, name, image, instructor, instructorEmail, price, description, availableSeats, enrolledStudents } = singleClass;
    // console.log(_id, name, instructor, instructorEmail, price,  description, availableSeats);

    const handleSelect = (_id) => {

        // console.log(_id);
        console.log(user?.email);
        if (user && user.email) {
            const cartItem = {
                studentEmail: user?.email,
                classId: _id,
                name,
                image,
                instructor,
                instructorEmail,
                price,
                description,
                availableSeats
            }
            axios.post('http://localhost:5000/carts', cartItem)
                .then(data => {
                    // console.log(data);
                    if (data.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${name} added successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Do you want to select this class?',
                text: "Please login first!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#b38b37',
                cancelButtonColor: '#f58c0d',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className={`flex flex-col border border-[#f1f1f1] ${availableSeats === 0 && 'bg-red-300'}`}>
            <div className="relative">
                <img className='w-full' src={image} alt="class img" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25">
                    <button className='bg-[#f58c0d] border-none text-white btn btn-xs absolute top-3 right-3'>$ {price}</button>
                </div>

            </div>
            <div className='px-4'>
                <h2 className="text-2xl my-5 font-semibold text-[#727475]">{name}</h2>
                <p className="text-[#aba5a3] mb-5">{description}</p>
                <p>Enrolled Students:{enrolledStudents}</p>
            </div>
            <div className='flex items-center justify-between bg-[#f9f9f9] p-4 mt-auto'>
                <p className='text-[#aba5a3] text-lg'>{instructor}</p>
                <div className='flex items items-center justify-center'>
                    <img className='w-[23px] mr-2' src={seatIcon} alt="" />
                    <p className='text-[#aba5a3]'>{availableSeats} seats</p>

                </div>
                <button onClick={() => handleSelect(_id)} disabled={availableSeats === 0 ? true : false} className='btn btn-sm bg-[#f2c63f] text-white capitalize'>Select</button>
            </div>
        </div>
    );
};

export default SingleClass;