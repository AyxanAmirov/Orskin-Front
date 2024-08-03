import React from "react";
import { Link } from "react-router-dom";

function ViewCard() {
  return (
      <div className="flex flex-col mt-[20px] mb-[20px] gap-[40px] pb-[20px]  bg-white shadow-2xl">
        <div className="flex flex-col gap-[40px] p-[30px]">
          <img
            src="https://orskin.ae/wp-content/uploads/2023/12/Botox.jpg"
            alt="services"
          />
          <p className="text-center xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[15px]">LASER</p>
        </div>
        <Link to="" className="bg-[#EDE1D4] xl:py-[15px] lg:py-[15px] md:py-[15px] sm:py-[15px] py-[10px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[13px] text-center font-[600]">
          View Menu
        </Link>
      </div>
  );
}

export default ViewCard;
