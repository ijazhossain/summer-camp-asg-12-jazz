import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bannerImg1 from '../../../assets/images/banner1.jpg'
import bannerImg4 from '../../../assets/images/banner4.jpg'
import { Parallax, Pagination, Navigation } from "swiper";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Banner = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="relative ">
                        <img src={bannerImg1} alt="" />
                        <div className="bg-black top-0 left-0  w-full h-full bg-opacity-[0.70] absolute flex items-center justify-center">
                            <div className="w-[75%] mx-auto pt-16 lg:pt-0">
                                <h1 className="text-lg mb-3 text-white">WELCOME TO MUSICINE </h1>
                                <h1 className="text-3xl lg:text-5xl mb-6 font-semibold ms-primary"> Learning Music With Easy Way</h1>
                                <p className="text-white hidden md:block leading-relaxed tracking-wide "> Join us for an immersive and inspiring experience, where young musicians aged 10 to 18 can explore their musical talents. Our daily workshops cover diverse genres and offer training in music theory, composition, instrument-specific masterclasses, vocal skills, and ensemble rehearsals. Led by experienced educators and industry professionals, this collaborative camp fosters growth and friendships.</p>
                                <div className="mt-8 flex items-center">
                                    <button onClick={() => navigate('/classes')} className="text-white flex items-center justify-center rounded-lg ms-0 bg-transparent border border-[#b38b37] ms-primary hover:bg-[#b38b37] hover:text-white h-[56px] w-[167px]">
                                        <FaShoppingCart className="me-2"></FaShoppingCart>
                                        Purchase</button>

                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="relative ">
                        <img src={bannerImg4} alt="" />
                        <div className="bg-black top-0 left-0  w-full h-full bg-opacity-[0.65] absolute flex items-center justify-center">
                            <div className="w-[75%] mx-auto">
                                <h1 className="text-lg mb-3 text-white">WELCOME TO MUSICINE </h1>
                                <h1 className="text-3xl lg:text-5xl mb-6 font-semibold ms-primary"> Learning Music With Easy Way</h1>
                                <p className="hidden md:block  text-white  leading-relaxed tracking-wide"> Join us for an immersive and inspiring experience, where young musicians aged 10 to 18 can explore their musical talents. Our daily workshops cover diverse genres and offer training in music theory, composition, instrument-specific masterclasses, vocal skills, and ensemble rehearsals. Led by experienced educators and industry professionals, this collaborative camp fosters growth and friendships.</p>
                                <div className="mt-8 flex items-center">
                                    <button onClick={() => navigate('/classes')} className="rounded-lg flex items-center justify-center  bg-transparent border border-[#b38b37] ms-primary hover:bg-[#b38b37] hover:text-white h-[56px] w-[167px] ms-0">
                                        <FaShoppingCart className="me-2"></FaShoppingCart>
                                        Purchase</button>

                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>

        </div>
    );
};

export default Banner;