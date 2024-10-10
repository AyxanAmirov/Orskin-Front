import React from "react";
import whatsappIcon from "../../assets/icons/whatsapp.png";
function Whatsapp() {
  return (
    <a href="https://wa.me/971504459672">
      <div className="cursor-pointer xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] rounded-[50%] fixed right-7 bottom-[20px] bg-[#22DDB0] xl:px-[9px] lg:px-[9px] md:px-[9px] xl:py-[4px] lg:py-[4px] md:py-[4px] flex items-center gap-[10px] xl:w-auto lg:w-auto md:w-auto w-[40px] ">
        <img src={whatsappIcon} alt="whatsapp" className="xl:w-[26px] lg:w-[26px] md:w-[26px] w-full xl:ml-[-18px] lg:ml-[-18px] md:ml-[-18px]" />
        <p className="text-[white] text-[12px] xl:block lg:block md:block hidden ">
          WhatssApp Us
        </p>
      </div>
    </a>
  );
}

export default Whatsapp;
