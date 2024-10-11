import React, { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";


function ServiceLaser() {
  const { moreinfo: { image, description } } = useContext(ServiceContext)


  return (
    <div className="container py-[40px]">
      <div className="flex gap-[30px] xl:flex-nowrap lg:flex-nowrap flex-wrap">
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
          <img
            src={image}
            alt="laser"
          />
        </div>
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
          <p className="text-[#555555] leading-[30px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[14px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceLaser;
