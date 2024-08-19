import React from "react";

function Wellness() {
  return (
    <div className="container py-[40px]">
      <p className="text-[#949598] text-[18px] font-[400]">
        At Orskin, we don’t just believe in looking your best, but feeling your
        best. In addition to our expert skincare and aesthetics treatments, our
        Wellness Department offers a range of proactive solutions to promote
        good health from within. IV drips are a highly effective way to feel
        better fast and we create customized solutions based on your body’s
        needs. A Hollywood favourite, the NAD IV drip stimulates cell
        regeneration to reduce inflammation and improve energy. Or why not try a
        vitamin mix to top up your levels? Or a detox drip to remove unwanted
        toxins.
      </p>
      <div className="flex mt-[30px] gap-[30px]">
        <img
          src="https://orskin.ae/wp-content/uploads/2023/12/IVDrips.jpg"
          alt="wellness"
        />
        <div className="col-lg-6 mt-[20px] flex flex-col gap-[25px]">
          <h3 className="text-[#9ad6cc] text-[20px]">Our selection of IV wellness drips includes:</h3>
          <ul className="flex flex-col gap-[10px] text-[#555555]">
            <li>– Anti-stress and antioxidant</li>
            <li>– Immune boost and hydration</li>
            <li>– Glowing and radiant skin</li>
            <li>– Cardio support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Wellness;
