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
import Slider from "../../components/slider/slider.jsx";
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
        <div className="flex  w-full justify-center pb-[40px]">
          <div className="col-lg-9 col-md-9 col-sm-9 col-9 ">
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 xl:gap-[30px] lg:gap-[30px] md:gap-[30px] sm:gap-[50px] gap-[50px] place-items-center  w-full  py-[30px] ">
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
          <h2 className="text-[#393939] font-[400] xl:text-[50px] lg:text-[50px] md:text-[45px] sm:text-[45px] text-[45px] uppercase">
            Shop
          </h2>
          <h4 className="font-bold text-[18px] text-center">
            WE BRING YOU THE BEST IN SKINCARE PRODUCTS
          </h4>
          <div className="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between pb-[50px]">
            {productData.map((product, index) => (
              <Products key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-[30px]">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <img
            src={HomeBanner}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="w-full flex items-center flex-col text-center md:gap-[20px]">
            <div className="xl:max-w-[350px] lg:max-w[350px] md:max-w-[350px] sm:max-w-[260px] max-w-[200px] flex flex-col items-center xl:gap-[30px] lg:gap-[30px] md:gap-[20px]">
              <img
                src={FacialTitle}
                alt="title"
                className="xl:w-[100%] lg:w-[100%] md:w-[220px] sm:w-[220px] w-[150px]"
              />
              <h4 className="text-[#393939] font-bold xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[16px] text-[14px] my-[15px]">
                MAKING YOU HAPPY YOU’RE IN YOUR OWN SKIN.
              </h4>
              <p className="font-bold xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[12px]">
                Taking care of your skin is a journey. And we’re here to make it
                a little easier for you. Book your complimentary consultation to
                get expert advice on the right treatment for you.
              </p>
            </div>
            <button className="w-full xl:p-[10px] lg:p-[10px] md:p-[10px] sm:p-[5px] bg-[#f0c6cf] hover:bg-[#EDE1D4] duration-[.3s] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[12px] ">
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
