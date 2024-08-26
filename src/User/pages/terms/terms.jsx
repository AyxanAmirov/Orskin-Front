import { faBasketShopping, faFileInvoice, faGear, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="mt-[250px] mb-[120px]">
      <div className="container">
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[40px]">
        <Link to={"/term-of-use"} className="cursor-pointer p-[40px] bg-[#F6F6F6] flex flex-col items-center gap-[20px] transition-shadow  duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)]  ">
            <div className="bg-[#9AD6CC] w-[60px] h-[60px] rounded-[50%] flex items-center justify-center">
              <FontAwesomeIcon icon={faFileInvoice} className="text-[white] text-[25px]" />
            </div>
            <p className="text-[17px] font-[500]">Terms of Use</p>
          </Link>
          <Link to={"/terms-supply"} className="cursor-pointer p-[40px] bg-[#F6F6F6] flex flex-col items-center gap-[20px] transition-shadow  duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)]  ">
            <div className="bg-[#9AD6CC] w-[60px] h-[60px] rounded-[50%] flex items-center justify-center">
              <FontAwesomeIcon icon={faBasketShopping} className="text-[white] text-[25px]" />
            </div>
            <p className="text-[17px] font-[500]">Terms of Supply</p>
          </Link>
          <Link to={"/privacy-policy"} className="cursor-pointer p-[40px] bg-[#F6F6F6] flex flex-col items-center gap-[20px] transition-shadow  duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)]  ">
            <div className="bg-[#9AD6CC] w-[60px] h-[60px] rounded-[50%] flex items-center justify-center">
              <FontAwesomeIcon icon={faUserLock} className="text-[white] text-[25px]" />
            </div>
            <p className="text-[17px] font-[500]">Privacy Policy</p>
          </Link>
          <Link to={"/cookie-policy"} className="cursor-pointer p-[40px] bg-[#F6F6F6] flex flex-col items-center gap-[20px] transition-shadow  duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)]  ">
            <div className="bg-[#9AD6CC] w-[60px] h-[60px] rounded-[50%] flex items-center justify-center">
              <FontAwesomeIcon icon={faGear} className="text-[white] text-[25px]" />
            </div>
            <p className="text-[17px] font-[500]">Cookie Policy</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Terms;
