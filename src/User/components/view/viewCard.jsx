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
          <p className="text-center text-[18px]">LASER</p>
        </div>
        <Link to="" className="bg-[#EDE1D4] py-[15px] text-center font-[600]">
          View Menu
        </Link>
      </div>
  );
}

export default ViewCard;
