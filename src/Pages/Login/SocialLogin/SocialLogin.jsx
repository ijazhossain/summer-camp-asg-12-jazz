import googleImg from '../../../assets/images/google.png'
const SocialLogin = ({ children }) => {
    const handleGoogleSignIn = () => {

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