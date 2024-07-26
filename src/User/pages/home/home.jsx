import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider.jsx";
import CosmeticMarka1 from "../../assets/images/dmg-logo.png";
import CosmeticMarka2 from "../../assets/images/darma-logo copy.png";
import CosmeticMarka3 from "../../assets/images/nano-logo.png";
import CosmeticMarka4 from "../../assets/images/nuro-logo.png";
import Products from "../../components/products/products.jsx";
const slides = [
  { image: "https://orskin.ae/wp-content/uploads/2023/07/home-banner1.jpg" },
  { image: "https://orskin.ae/wp-content/uploads/2023/07/home-banner2.jpg" },
  { image: "https://orskin.ae/wp-content/uploads/2023/07/home-banner3.jpg" },
];
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
              <Products
                key={index}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
