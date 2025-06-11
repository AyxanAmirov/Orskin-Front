
import Service from "../assets/image/choose-your-department.webp";
import { NavLink } from "react-router-dom";

import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
function ServiceNavbar({ moreinfo }) {


  return (
    <div className="servicenavbar">
      <img
        src={moreinfo?.banner}
        alt="Service Banner"
        className="w-[100%] xl:h-[420px] object-cover lg:h-[390px] md:h-[330px] sm:h-[310px] h-[200px]"
        data-aos="zoom-in"
        width="100%"
        height="auto"
      />

      <div className="container">
        <div className="mt-[50px] flex flex-col items-center gap-[20px]">
          <div>
            <h1 className="text-center text-[#2f2f2f] text-[54px]" data-aos="zoom-in">
              OUR SERVICES
            </h1>
            <img src={Service} alt="Choose Your Department" data-aos="zoom-in"
              width="auto" height="auto" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">

            <Swiper
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                140: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 5,
                }
              }}
              className="mySwiper"
            >

              <SwiperSlide>
                <NavLink
                  to={"/services/laser"}
                  className="text-[#949598] font-[400] uppercase xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]"
                >
                  Laser
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink
                  to={"/services/slimming"}
                  className="text-[#949598] font-[400] uppercase xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]"
                >
                  SLIMMING
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink
                  to={"/services/aesthetics"}
                  className="text-[#949598] font-[400] uppercase xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]"
                >
                  AESTHETICS
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink
                  to={"/services/facials"}
                  className="text-[#949598] font-[400] uppercase xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]"
                >
                  FACIALS
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink
                  to={"/services/wellness"}
                  className="text-[#949598] font-[400] uppercase xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]"
                >
                  WELLNESS
                </NavLink>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceNavbar;
