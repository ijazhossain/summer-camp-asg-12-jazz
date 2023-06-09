
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import bannerImg1 from '../../../assets/images/banner1.jpg'
import bannerImg4 from '../../../assets/images/banner4.jpg'
// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
const Banner = () => {
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
                                <p className="text-white hidden md:block leading-relaxed tracking-wide"> Join us for an immersive and inspiring experience, where young musicians aged 10 to 18 can explore their musical talents. Our daily workshops cover diverse genres and offer training in music theory, composition, instrument-specific masterclasses, vocal skills, and ensemble rehearsals. Led by experienced educators and industry professionals, this collaborative camp fosters growth and friendships.</p>
                                <div className="mt-6 flex items-center">
                                    <button className="rounded-lg  bg-transparent border border-[#b38b37] ms-primary hover:bg-[#b38b37] hover:text-white h-[56px] w-[167px]">Get Started</button>

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
                                <p className="text-white hidden sm:block leading-relaxed tracking-wide"> Join us for an immersive and inspiring experience, where young musicians aged 10 to 18 can explore their musical talents. Our daily workshops cover diverse genres and offer training in music theory, composition, instrument-specific masterclasses, vocal skills, and ensemble rehearsals. Led by experienced educators and industry professionals, this collaborative camp fosters growth and friendships.</p>
                                <div className="mt-10 flex items-center">
                                    <button className="rounded-lg  bg-transparent border border-[#b38b37] ms-primary hover:bg-[#b38b37] hover:text-white h-[56px] w-[167px]">Get Started</button>

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