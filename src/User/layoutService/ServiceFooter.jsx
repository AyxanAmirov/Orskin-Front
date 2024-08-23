import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import {
  faMobileScreen,
  faAt,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

function ServiceFooter() {
  return (
    <div className="my-[40px]">
      <div className="w-full bg-service bg-no-repeat bg-center bg-cover py-[60px] text-center">
        <div className="container">
          <p className="xl:text-[45px] lg:text-[45px] md:text-[45px] sm:text-[33px] text-[25px] font-[450] leading-[55px] text-shadow">
            <span className="font-[600]">Everything</span> we do is <br />
            designed to <span className="font-[600]">beautify</span> you.
          </p>
        </div>
      </div>
      <div className="mt-[40px]">
        <div className="container">
          <h2 className="text-[#8b8b8b] xl:text-[45px] lg:text-[45px] md:text-[45px] sm:text-[33px] text-[28px] text-center">
            EXPERIENCE THE ORSKIN DIFFERENCE
          </h2>
          <form className="flex mt-[30px] flex-col gap-[20px]">
            <div className="w-full relative">
              <input
                type="text"
                className="w-full border-solid border-[1px] border-[#E2E2E2] text-[#A1A3A7] py-[15px] pl-[50px] bg-[#F6F6F6] rounded-[10px] focus:outline-[#65BC7B]"
                placeholder="Full Name*"
              />
              <FontAwesomeIcon
                icon={faFaceSmile}
                className="absolute left-[20px] top-[18px] text-[18px] text-[#A1A3A7]"
              />
            </div>
            <div className="flex">
              <div className="relative col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <input
                  type="text"
                  className="w-full border-solid border-[1px] border-[#E2E2E2] text-[#A1A3A7] py-[15px] pl-[50px] bg-[#F6F6F6] rounded-[10px] focus:outline-[#65BC7B]"
                  placeholder="Mobil Number*"
                />
                <FontAwesomeIcon
                  icon={faMobileScreen}
                  className="absolute left-[20px] top-[18px] text-[18px] text-[#A1A3A7]"
                />
              </div>
              <div className="relative col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <input
                  type="text"
                  className="w-full border-solid border-[1px] border-[#E2E2E2] text-[#A1A3A7] py-[15px] pl-[50px] bg-[#F6F6F6] rounded-[10px] focus:outline-[#65BC7B]"
                  placeholder="Email*"
                />
                <FontAwesomeIcon
                  icon={faAt}
                  className="absolute left-[20px] top-[18px] text-[18px] text-[#A1A3A7]"
                />
              </div>
            </div>
            <div className="w-full relative">
              <textarea
                className="w-full border-solid py-[14px] border-[1px] border-[#E2E2E2] text-[#A1A3A7] h-[150px] pl-[50px] bg-[#F6F6F6] rounded-[10px] focus:outline-[#65BC7B]"
                placeholder="Message"
              ></textarea>
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className="absolute left-[20px] top-[18px] text-[18px] text-[#A1A3A7]"
              />
            </div>
            <div className="px-[50px]">
              <button className="w-full py-[10px]  bg-[#f0c6cf] rounded-[5px] font-bold hover:bg-[#EDE1D4] duration-[.3s]">
                Enquire Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ServiceFooter;
