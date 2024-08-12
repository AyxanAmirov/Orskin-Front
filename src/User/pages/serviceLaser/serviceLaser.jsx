import React from "react";

function ServiceLaser() {
  return (
    <div className="container py-[40px]">
      <div className="flex gap-[30px]">
        <div className="col-lg-5">
          <img
            src="https://orskin.ae/wp-content/uploads/2023/12/AdvaTX.jpg"
            alt="laser"
          />
        </div>
        <div className="col-lg-7">
          <p className="text-[#555555] leading-[30px]">
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
