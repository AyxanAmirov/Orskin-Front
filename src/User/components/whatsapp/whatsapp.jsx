import React from "react";
import whatsappIcon from "../../assets/icons/whatsapp.png" 
function Whatsapp() {
  return (
    <div className="rounded-[20px] fixed right-10 bottom-[20px] bg-[#22DDB0] px-[15px] py-[8px] flex items-center gap-[10px]">
     <img src={whatsappIcon} alt="whatsapp" className="w-[30px] ml-[-25px]"/>
      <p className="text-[white] text-[14px] "> WhatssApp Us</p>
    </div>
  );
}

export default Whatsapp;
