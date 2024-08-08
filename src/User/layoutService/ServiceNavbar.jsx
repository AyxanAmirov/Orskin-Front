import React from "react";
import Service from "../assets/images/choose-your-department (1).png";
import { NavLink } from "react-router-dom";
function ServiceNavbar() {
  return (
    <div className="mt-[175px]">
      <img
        src="https://orskin.ae/wp-content/uploads/2023/12/orskin-facials.jpg"
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
          <div className="col-lg-6">
            <ul className="flex justify-between">
              <NavLink
                to={"/services/laser"}
                className="text-[#949598] font-[400] uppercase"
              >
                Laser
              </NavLink>
              <NavLink
                to={"/services/slimming"}
                className="text-[#949598] font-[400] uppercase"
              >
                SLIMMING
              </NavLink>
              <NavLink
                to={"/services/aesthetics"}
                className="text-[#949598] font-[400] uppercase"
              >
                AESTHETICS
              </NavLink>
              <NavLink
                to={"/services/facials"}
                className="text-[#949598] font-[400] uppercase"
              >
                FACIALS
              </NavLink>
              <NavLink
                to={"/services/wellness"}
                className="text-[#949598] font-[400] uppercase"
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
