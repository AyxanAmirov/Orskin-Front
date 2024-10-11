import React, { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";

function Wellness() {
  const { moreinfo: { image, description } } = useContext(ServiceContext)
  return (
    <div className="container py-[40px]">
      <p className="text-[#949598] xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px] font-[400] mb-[30px]">
        {description}
      </p>
      <div className="flex xl:flex-nowrap lg:flex-nowrap flex-wrap  mt-[30px] gap-[30px]">
        <img
          src={image}
          alt="wellness"
        />
        <div className="col-lg-6 mt-[20px] flex flex-col gap-[25px]">
          <h3 className="text-[#9ad6cc] xl:text-[20px] lg:text-[20px] text-[17px]">Our selection of IV wellness drips includes:</h3>

          <p className="text-[#555555] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[14px]">– Anti-stress and antioxidant<br />
            – Immune boost and hydration<br />
            – Glowing and radiant skin<br />
            – Cardio support<br />
            – Memory boost<br />
            – Hair regenerate<br />
            – Energy boost &amp; fitness support<br />
            – Vitamin mix<br />
            – Liver detox<br />
            – Female balance<br />
            – Gut healer<br />
            – Customized (VIP anti-aging)<br />
            – Blood boost and iron<br />
            – Diabetic support<br />
            – Customized (HMD)</p>
        </div>
      </div>
    </div>
  );
}

export default Wellness;
