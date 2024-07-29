import React, { useEffect, useState } from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import ViewCard from "../../components/view/viewCard";
import axios from "axios";
import Slider from "../../components/slider/slider";
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
      <div className="container">
        <div className="grid grid-cols-3 gap-[30px]">
          <ViewCard />
          <ViewCard />
          <ViewCard />
          <ViewCard />
          <ViewCard />
          <ViewCard />
        </div>
      </div>
      <Slider data={data} />
    </section>
  );
}

export default Services;
