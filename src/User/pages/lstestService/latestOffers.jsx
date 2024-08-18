import React from "react";
import OffersImage from "../../assets/images/treatment-offers.png";
import servcicePhoto from "../../assets/images/LessPainMoreGain-400x600.jpg"
function LatestOffers() {
  return (
    <div className="container ">
     <div className="mt-[260px]">
     <h1 className="text-[#2f2f2f] text-[55px] text-center">OUR LATEST</h1>
      <div className="w-full flex justify-center">
        <img src={OffersImage} alt="offers" />
      </div>
      <div className="p-[40px] custom-shadow-1  my-[50px] flex gap-[10px]">
        <img src={servcicePhoto} alt="inform" />
        <div className="px-[30px] pt-[30px] flex flex-col gap-[20px]">
          <p className="text-[#393939] text-[18px] leading-[26px]">At Orksin, we make the path to perfection as comfortable as possible with innovative devices that minimise soreness.</p>
          <div>
            <h3 className="text-[#393939] text-[18px] leading-[26px] font-bold">Noxi-System</h3>
            <p className="text-[#393939] text-[18px] leading-[26px]">Our Noxi-System is an FDA-approved, self-administered analgesic gas using 50/50 percent oxygen and nitrous oxide to reduce anxiety and discomfort.</p>
          </div>
          <div>
            <h3 className="text-[#393939] text-[18px] leading-[26px] font-bold">Cool Skin</h3>
            <p className="text-[#393939] text-[18px] leading-[26px]">While Cool Skin uses expert technology to numb the skin ready for your procedure.</p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default LatestOffers;
