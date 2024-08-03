import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./product.css";
import { Link } from "react-router-dom";
function Products({ product }) {
  return (
    <div className="flex flex-col items-center">
      <div className="card relative ">
        <img src={product.imgSrc} alt="product" className="w-full" />

        <div className="overlay absolute  inset-0 bg-[#B3D6D0] "></div>
        <div className="icons absolute right-[30px] top-[20px] flex flex-col gap-[20px] ">
          <Link to="/details">
            <FontAwesomeIcon
              icon={faEye}
              className="text-[grey] xl:text-[23px] lg:text-[23px] md:text-[23px] sm:text-[23px] text-[18px] cursor-pointer"
            />
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-[grey] xl:text-[23px] lg:text-[23px] md:text-[23px] sm:text-[23px] text-[18px] cursor-pointer"
            />
          </Link>
          <FontAwesomeIcon
            icon={faHeart}
            className="text-[grey] xl:text-[23px] lg:text-[23px] md:text-[23px] sm:text-[23px] text-[18px] cursor-pointer"
          />
        </div>
      </div>

      <p className="font-[400] mt-2 text-center xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[10px]">{product.title}</p>
      <p className="text-[#a5a7aa] xl:text-[13px] lg:text-[13px] md:text-[13px] sm:text-[13px] text-[8px]">{product.price}</p>
    </div>
  );
}

export default Products;
