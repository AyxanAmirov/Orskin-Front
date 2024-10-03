import React from "react";

function HomeService({category, title}) {
  return (
    <div className=" flex flex-col gap-[20px] bg-white border-r-solid border-r-[3px] border-r-[#D6D6D6] border-l-solid border-l-[3px] border-l-[#D6D6D6]">
      <div className="p-[30px]">
        <img src={category} alt="service" className="mb-[30px]" />
        <img src={title} alt="service" />
      </div>
      <div className="px-[2px]">
        <button className="w-full text-center py-[10px] bg-[#EDE1D4] mb-[-25px]">
          See More
        </button>
      </div>
    </div>
  );
}

export default HomeService;
