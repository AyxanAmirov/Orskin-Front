import React from 'react'
import { Link } from 'react-router-dom'

function ServicesCards() {
  return (
    <Link to={"latest-offers"}>
      <div className="flex flex-col mt-[20px] mb-[20px] gap-[40px] pb-[111px]  bg-white shadow-2xl relative">
        <div className="flex flex-col gap-[40px] p-[30px]">
          <img src="https://orskin.ae/wp-content/uploads/2023/12/AdvaTX.jpg" alt="services" />
          <p className="text-center xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[15px]">
            Latest Offers
          </p>
        </div>
        <p
          className="bg-[#EDE1D4] xl:py-[15px] lg:py-[15px] md:py-[15px] sm:py-[15px] py-[10px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[13px] text-center font-[600] absolute bottom-[-22px] w-full"
        >
          View All Offers
        </p>
      </div>
    </Link>
  )
}

export default ServicesCards
