import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@chakra-ui/react";
import Products from "../../components/products/products";
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
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
];
function ProductDetails() {
  return (
    <div className="container pb-[50px]">
      <div className="flex gap-[20px]">
        <div className="col-lg-4">
          <img
            src="https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-500x500.webp"
            alt="product"
          />
        </div>
        <div className="col-lg-8 my-[45px]">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[#9ad6cc] text-[22px]">
              Epicuren – Silk Radience 3-in-1 Cleansing Oil
            </h2>
            <p className="text-[#A5A7AA] text-[13px]">AED 496.32 + VAT</p>
            <p className="max-w-[350px] leading-[3rem]">
              Awaken your skin’s natural suppleness and dissolve impurities with
              this silky blend of antioxidant and lipid rich oils. Infused with
              pure essential oils, this 3-phase luxury experience transitions
              from rich gel, to aromatic oil, to delicate milky cleanser,
              captivating your senses, while restoring perfect harmony and
              moisture. Recommended For | Dry and normal skin types
            </p>
            <div className="flex items-center gap-[10px]">
              <div className="col-lg-2">
                <span className="py-[10px] px-[15px] bg-[#FCFCFC] rounded-tl-[5px] rounded-bl-[5px] hover:bg-[white] border-cart cursor-pointer">
                  -
                </span>
                <span className="py-[10px] px-[15px] border-cart-num  cursor-pointer text-[14px]">
                  1
                </span>
                <span className="py-[10px] px-[15px] bg-[#FCFCFC] rounded-tr-[5px] rounded-br-[5px]  hover:bg-[white] border-cart cursor-pointer">
                  +
                </span>
              </div>
              <div className="col-lg-10">
                <button className="w-full text-[14px] bg-[#9ad6cc] py-[10px]  rounded-[4px] text-[white] duration-[.4s] hover:bg-black hover:text-[#9ad6cc]">
                  Add To Card
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[30px] gap-[50px]">
            <div className="flex items-center gap-[5px] cursor-pointer">
              <FontAwesomeIcon icon={faHeart} className="text-[#9AD6CC]" />
              <p className="text-[#9AD6CC] text-[14px]">Add to wishlist</p>
            </div>
            <div className="flex gap-[20px]">
              <Tooltip hasArrow label="Facebook" bg="black" color="#D3D3D3">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-[#B7B9BB]"
                />
              </Tooltip>
              <Tooltip hasArrow label="Email" bg="black" color="#D3D3D3">
                <FontAwesomeIcon icon={faTwitter} className="text-[#B7B9BB]" />
              </Tooltip>
              <Tooltip hasArrow label="Email" bg="black" color="#D3D3D3">
                <FontAwesomeIcon
                  icon={faPinterestP}
                  className="text-[#B7B9BB]"
                />
              </Tooltip>
              <Tooltip hasArrow label="Email" bg="black" color="#D3D3D3">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#B7B9BB]" />
              </Tooltip>
            </div>
            <p className="text-[20px] text-[#9AD6CC]">Categories: Cleansers</p>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-[#E2E2E2] border-solid w-full min-h-[200px]">
        test
      </div>
      <div className="flex flex-col gap-[20px] mt-[30px]">
        <h3 className="text-[20px] text-[#9AD6CC]">Related Products</h3>
        <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-between">
          {productData.map((product, index) => (
            <Products key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
