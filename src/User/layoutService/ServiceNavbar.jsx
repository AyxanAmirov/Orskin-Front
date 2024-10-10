import React, { useEffect } from "react";
import Service from "../assets/images/choose-your-department (1).png";
import { NavLink, useLocation } from "react-router-dom";

function ServiceNavbar() {
  const location = useLocation();

  const images = {
    "/services/laser": "https://orskin.ae/wp-content/uploads/2023/08/Orskin_Laser_Banner.jpg",
    "/services/slimming": "https://orskin.ae/wp-content/uploads/2023/08/Orskin_Slimming_Banner.jpg",
    "/services/aesthetics": "https://orskin.ae/wp-content/uploads/2023/12/orskin-aesthetics.jpg",
    "/services/facials": "https://orskin.ae/wp-content/uploads/2023/12/orskin-facials.jpg",
    "/services/wellness": "https://orskin.ae/wp-content/uploads/2023/07/wellness-banner.jpg",
  };
  let currentImage = images[location.pathname] || "https://orskin.ae/wp-content/uploads/2023/08/Orskin_Laser_Banner.jpg";



  return (
    <div className="mt-[175px]">
      <img
        src={currentImage}
        alt="cover"
      />
     
      <div className="container">
        <div className="mt-[50px] flex flex-col items-center gap-[20px]">
          <div>
            <h1 className="text-center text-[#2f2f2f] text-[54px]">
              OUR SERVICES
            </h1>
            <img src={Service} alt="service" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <ul className="flex  justify-between ">
              <NavLink
                to={"/services/laser"}
                className="text-[#949598] font-[400] uppercase xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]"
              >
                Laser
              </NavLink>
              <NavLink
                to={"/services/slimming"}
                className="text-[#949598] font-[400] uppercase xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]"
              >
                SLIMMING
              </NavLink>
              <NavLink
                to={"/services/aesthetics"}
                className="text-[#949598] font-[400] uppercase xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]"
              >
                AESTHETICS
              </NavLink>
              <NavLink
                to={"/services/facials"}
                className="text-[#949598] font-[400] uppercase xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]"
              >
                FACIALS
              </NavLink>
              <NavLink
                to={"/services/wellness"}
                className="text-[#949598] font-[400] uppercase xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]"
              >
                WELLNESS
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceNavbar;
