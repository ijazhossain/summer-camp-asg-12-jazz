import axios from 'axios';
import googleImg from '../../../assets/images/google.png'
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = ({ children }) => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log('google', loggedUser);
                const newUser = {
                    name: loggedUser?.displayName,
                    email: loggedUser?.email,
                    image: loggedUser?.photoURL,

                }
                axios.post('http://localhost:5000/users', newUser)
                    .then(data => {
                        console.log(data);
                        if (data.data.insertedId) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success...',
                                text: 'Login successful!',

                            })
                        }
                        navigate(from, { replace: true })
                    })
            })
    }
    return (
        <div className='px-8'>
            <button onClick={handleGoogleSignIn} className='border border-[#b37b38] text-[#b37b38] w-full mt-4 py-2 font-semibold rounded-lg flex items-center justify-center '>
                <img className='mr-3' width="18px" src={googleImg} alt="google img" />
                <span className='text-sm'>{children}</span>
            </button>
            <p className='text-red-500 font-bold'></p>
        </div>
    );
};

export default SocialLogin;