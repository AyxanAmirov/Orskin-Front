import React from "react";
import whatsappIcon from "../../assets/icons/whatsapp.png";
function Whatsapp() {
  return (
    <div className="cursor-pointer xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] rounded-[50%] fixed right-7 bottom-[20px] bg-[#22DDB0] xl:px-[15px] lg:px-[15px] md:px-[15px] xl:py-[8px] lg:py-[8px] md:py-[8px] flex items-center gap-[10px] xl:w-auto lg:w-auto md:w-auto w-[40px] ">
      <img src={whatsappIcon} alt="whatsapp" className="xl:w-[30px] lg:w-[30px] md:w-[30px] w-full xl:ml-[-25px] lg:ml-[-25px] md:ml-[-25px]" />
      <p className="text-[white] text-[14px] xl:block lg:block md:block hidden">
        WhatssApp Us
      </p>
    </div>
  );
}

export default Whatsapp;
