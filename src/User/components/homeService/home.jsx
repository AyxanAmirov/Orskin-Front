import React from "react";

function HomeService({ category, title, delay }) {
  return (
    <div className=" flex flex-col justify-between gap-[20px] bg-white border-r-solid border-r-[3px] border-r-[#D6D6D6] border-l-solid border-l-[3px] border-l-[#D6D6D6]" data-aos="zoom-in" data-aos-delay={delay * 150}>
      <div className="p-[30px]">
        <img src={category} alt="service" className="mb-[30px] w-full" />
        <img src={title} alt="service" className="mx-auto" />
      </div>
      <div >
        <button className="w-full text-center py-[15px] bg-[#EDE1D4] ">
          See More
        </button>
      </div>
    </div>
  );
}

export default HomeService;
