import React, { useEffect, useState } from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider.jsx";
import CosmeticMarka1 from "../../assets/images/dmg-logo.png";
import CosmeticMarka2 from "../../assets/images/darma-logo copy.png";
import CosmeticMarka3 from "../../assets/images/nano-logo.png";
import CosmeticMarka4 from "../../assets/images/nuro-logo.png";
import HomeBanner from "../../assets/images/facial-banner.jpg";
import FacialTitle from "../../assets/images/facial-title.png";
import Products from "../../components/products/products.jsx";
import { Link } from "react-router-dom";
import Slider from "../../components/slider/slider.jsx"
import axios from "axios";
//home slider
const slides = [
  { image: "https://orskin.ae/wp-content/uploads/2023/07/home-banner1.jpg" },
  { image: "https://orskin.ae/wp-content/uploads/2023/07/home-banner2.jpg" },
  { image: "https://orskin.ae/wp-content/uploads/2023/07/home-banner3.jpg" },
];

//shop products
const productData = [
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
];

function Home() {
  //slider
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
    <>
      <HomeSlider slides={slides} />
      <div className="w-full h-[500px] bg-walpaper bg-no-repeat bg-center bg-cover mb-[60px]"></div>
      <div className="container">
        <div className="flex  w-full justify-center">
          <div className="col-lg-9  ">
            <div className="flex w-full justify-between py-[30px]">
              <img src={CosmeticMarka1} alt="dmg" className="object-contain" />
              <img
                src={CosmeticMarka2}
                alt="darma"
                className="object-contain"
              />
              <img src={CosmeticMarka3} alt="nano" className="object-contain" />
              <img src={CosmeticMarka4} alt="nuro" className="object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-[50px] flex w-full flex-col items-center gap-[20px]">
          <h2 className="text-[#393939] font-[400] text-[50px] uppercase">
            Shop
          </h2>
          <h4 className="font-bold text-[18px]">
            WE BRING YOU THE BEST IN SKINCARE PRODUCTS
          </h4>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between pb-[50px]">
            {productData.map((product, index) => (
              <Products key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-[30px]">
        <div className="col-lg-6">
          <img src={HomeBanner} alt="banner" />
        </div>
        <div className="col-lg-6">
          <div className="flex flex-col items-center text-center gap-[30px]">
            <div className="max-w-[350px]">
              <img src={FacialTitle} alt="title" />
              <h4 className="text-[#393939] font-bold text-[20px] my-[15px]">
                MAKING YOU HAPPY YOU’RE IN YOUR OWN SKIN.
              </h4>
              <p className="font-bold">
                Taking care of your skin is a journey. And we’re here to make it
                a little easier for you. Book your complimentary consultation to
                get expert advice on the right treatment for you.
              </p>
            </div>
            <button className="w-full p-[10px] bg-[#f0c6cf] hover:bg-[#EDE1D4] duration-[.3s]">
              <Link>Book Now</Link>
            </button>
          </div>
        </div>
      </div>
      <Slider data={data} />
    </>
  );
}

export default Home;
