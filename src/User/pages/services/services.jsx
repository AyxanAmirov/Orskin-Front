import React, { useEffect, useState } from "react";
import ViewCard from "../../components/view/viewCard";
import axios from "axios";
import Slider from "../../components/feedbacks";
import ServicesCards from "../../components/allServices/servicesCards";
import Banner from "../../components/banner";
import Feedbacks from "../../components/feedbacks";
import { services } from "../../../data/data";
import HomeService from "../../components/homeService/home";
const slides = [
  { image: "https://orskin.ae/wp-content/uploads/2023/07/laser-banner.jpg" },
  { image: "https://orskin.ae/wp-content/uploads/2023/07/slimming-banner.jpg" },
  {
    image: "https://orskin.ae/wp-content/uploads/2023/12/orskin-aesthetics.jpg",
  },
  { image: "https://orskin.ae/wp-content/uploads/2023/12/orskin-facials.jpg" },
  { image: "https://orskin.ae/wp-content/uploads/2023/07/wellness-banner.jpg" },
];


function Services() {

  return (
    <section>
      <Banner slides={slides} />
      <div className="max-w-[1000px] mt-[60px] w-[90%] m-auto">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1  gap-[30px] w-full   mb-[50px]">
          {services?.map((service) => (
            <HomeService {...service} />
          ))}
        </div>
      </div>
      <Feedbacks />
    </section>
  );
}

export default Services;
