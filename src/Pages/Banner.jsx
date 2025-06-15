import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./Css/Banner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-fade";
import {
  Parallax,
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
} from "swiper/modules";
const Banner = () => {

  
  return (
    <div className="z-60">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay, EffectFade]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide>
           <div className="relative h-full">
    {/* Background overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>

    {/* Content */}
    <div className="relative flex flex-col justify-center items-center h-full text-center z-20 px-4">
      <h1
        className="text-4xl md:text-6xl font-bold mb-4 text-white"
        data-swiper-parallax="-300"
      >
        Gear Up for the Game
      </h1>
      <h2
        className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300"
        data-swiper-parallax="-250"
      >
        Your Ultimate Sports Partner
      </h2>
      <p
        className="text-lg md:text-xl text-gray-200 max-w-3xl mb-6"
        data-swiper-parallax="-200"
      >
        Whether you're a pro or just starting, we’ve got the gear to take your
        game to the next level. From performance-enhancing equipment to the
        latest in sports technology, find everything you need to excel.
      </p>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
        data-swiper-parallax="-100"
      >
        Shop Now
      </button>
    </div>
  </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>

            {/* Content */}
            <div className="relative flex flex-col justify-center items-center h-full text-center z-20 px-4">
              <h1
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                data-swiper-parallax="-300"
              >
               Push Your Limits
              </h1>
              <p
                className="text-lg md:text-xl text-gray-200 max-w-3xl mb-6"
                data-swiper-parallax="-200"
              >
                This is where you can add a compelling description or
                call-to-action text to engage your audience and make your
                content stand out.
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
                data-swiper-parallax="-100"
              >
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>

            {/* Content */}
            <div className="relative flex flex-col justify-center items-center h-full text-center z-20 px-4">
              <h1
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                data-swiper-parallax="-300"
              >
                Welcome to the Hero Section
              </h1>
              <p
                className="text-lg md:text-xl text-gray-200 max-w-3xl mb-6"
                data-swiper-parallax="-200"
              >
                This is where you can add a compelling description or
                call-to-action text to engage your audience and make your
                content stand out.
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
                data-swiper-parallax="-100"
              >
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
