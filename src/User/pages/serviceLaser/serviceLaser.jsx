import React from "react";

function ServiceLaser() {
  return (
    <div className="container py-[40px]">
      <div className="flex gap-[30px] xl:flex-nowrap lg:flex-nowrap flex-wrap">
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
          <img
            src="https://orskin.ae/wp-content/uploads/2023/12/AdvaTX.jpg"
            alt="laser"
          />
        </div>
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
          <p className="text-[#555555] leading-[30px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[14px]">
            Our aestheticians use the advanced ADVATx, which is among the most
            sophisticated dermatology lasers in the world and can be used for
            multiple stand-alone and combination therapies. Advalight combines
            high-powered yellow and infrared laser energy to improve skin tone,
            texture and overall dermal health, making it particularly beneficial
            for conditions including psoriasis, rosacea, sun damage, wrinkles,
            spider veins, blemishes, and birth marks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceLaser;
