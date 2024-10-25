import React, { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";


function ServiceLaser() {
  const { moreinfo: { items } } = useContext(ServiceContext)


  return (
    <div className="container py-[40px]">
      <div className="flex gap-[30px] flex-wrap">
        {
          items?.map((item, index) => <div key={item.id} className={index % 2 == 0 ? "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 flex gap-[30px] xl:flex-nowrap lg:flex-nowrap flex-wrap align-center" : "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 flex gap-[30px] xl:flex-nowrap lg:flex-nowrap flex-wrap flex-row-reverse align-center"}>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <img
                src={item.image}
                alt={item.title}
                data-aos="zoom-in"
                className="w-[500px] h-[400px] object-cover"
              />
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <p className="text-[#555555] leading-[30px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[14px]" data-aos="zoom-in">
                {item.description}
              </p>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default ServiceLaser;
