
import Service from "../assets/image/choose-your-department.png";
import { NavLink } from "react-router-dom";

function ServiceNavbar({ moreinfo }) {


  return (
    <div>
      <img
        src={moreinfo?.banner}
        alt="cover"
        className="w-100 xl:h-[420px] object-cover lg:h-[390px] md:h-[330px] sm:h-[310px] h-[200px]"
      />

      <div className="container">
        <div className="mt-[50px] flex flex-col items-center gap-[20px]">
          <div>
            <h1 className="text-center text-[#2f2f2f] text-[54px]" data-aos="zoom-in">
              OUR SERVICES
            </h1>
            <img src={Service} alt="service" data-aos="zoom-in" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <ul className="flex  justify-between " data-aos="zoom-in">
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
