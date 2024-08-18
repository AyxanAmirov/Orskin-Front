import React, { useEffect, useState } from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import ViewCard from "../../components/view/viewCard";
import axios from "axios";
import Slider from "../../components/slider/slider";
import ServicesCards from "../../components/allServices/servicesCards";
const slides = [
  { image: "https://orskin.ae/wp-content/uploads/2023/07/laser-banner.jpg" },
  { image: "https://orskin.ae/wp-content/uploads/2023/07/slimming-banner.jpg" },
  {
    image: "https://orskin.ae/wp-content/uploads/2023/12/orskin-aesthetics.jpg",
  },
  { image: "https://orskin.ae/wp-content/uploads/2023/12/orskin-facials.jpg" },
  { image: "https://orskin.ae/wp-content/uploads/2023/07/wellness-banner.jpg" },
];

const services = [
  {
    img: "https://orskin.ae/wp-content/uploads/2023/12/AdvaTX.jpg",
    title: "Laser",
  },
  {
    img: "https://orskin.ae/wp-content/uploads/2023/12/AdvaTX.jpg",
    title: "Slimming",
  },
  {
    img: "https://orskin.ae/wp-content/uploads/2023/12/AdvaTX.jpg",
    title: "Aesthetics",
  },
  {
    img: "https://orskin.ae/wp-content/uploads/2023/12/AdvaTX.jpg",
    title: "Facials",
  },
  {
    img: "https://orskin.ae/wp-content/uploads/2023/12/AdvaTX.jpg",
    title: "Wellness",
  },
];

function Services() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://6622d9c13e17a3ac846e1a5a.mockapi.io/books"
        );
        const result = response.data;
        setData(result);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    getData();
  }, []);

  return (
    <section>
      <HomeSlider slides={slides} />
      <div className="max-w-[1000px] w-[90%] m-auto">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1  gap-[30px] w-full   mb-[50px]">
          {services?.map((service) => (
            <ViewCard service={service} />
          ))}
          <ServicesCards/>
        </div>
      </div>
      <Slider data={data} />
    </section>
  );
}

export default Services;
