
import seatIcon from '../../../assets/images/icon-availability.svg'
const SingleClass = ({ singleClass }) => {
    // console.log(singleClass);
    const { _id, name, image, instructor, price, description, availableSeats } = singleClass;
    // console.log(_id, name, instructor, instructorEmail, price,  description, availableSeats);
    return (
        <div className='flex flex-col border border-[#f1f1f1]'>
            <div className="relative">
                <img src={image} alt="class img" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25">
                    <button className='bg-[#f58c0d] border-none text-white btn btn-xs absolute top-3 right-3'>$ {price}</button>
                </div>

            </div>
            <div className='px-4'>
                <h2 className="text-2xl my-5 font-semibold text-[#727475]">{name}</h2>
                <p className="text-[#aba5a3] mb-5">{description}</p>
            </div>
            <div className='flex items-center justify-between bg-[#f9f9f9] p-4 mt-auto'>
                <p className='text-[#aba5a3] text-lg'>{instructor}</p>
                <div className='flex items items-center justify-center'>
                    <img className='w-[23px] mr-2' src={seatIcon} alt="" />
                    <p className='text-[#aba5a3]'>{availableSeats} seats</p>
                </div>
                <button className='btn btn-sm bg-[#f2c63f] text-white capitalize'>Select</button>
            </div>
        </div>
    );
};

export default SingleClass;