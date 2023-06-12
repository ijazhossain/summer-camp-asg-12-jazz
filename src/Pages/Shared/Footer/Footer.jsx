import { Link } from 'react-router-dom';
import footerImg from '../../../assets/images/footer-logo.png'
const Footer = () => {
    return (
        <div className="mt-12  bg-[#2b3440] text-white">
            <footer className="footer p-10 w-[90%] mx-auto ">
                <div>
                    <img className='w-[150px]' src={footerImg} alt="" />
                    <p className='mt-5'>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Music</Link>
                    <Link className="link link-hover">Rehearsal</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;