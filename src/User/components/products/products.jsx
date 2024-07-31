import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./product.css"
function Products({ product }) {
  return (
    <div className="flex flex-col items-center">
      <div className="card relative ">
        <img src={product.imgSrc} alt="product" className="w-full" />
        <div className="overlay absolute  inset-0 bg-[#B3D6D0] "></div>
        <div className="icons absolute right-[30px] top-[20px] flex flex-col gap-[20px] ">
          <FontAwesomeIcon icon={faEye} className="text-[grey] text-[23px] cursor-pointer" />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-[grey] text-[23px] cursor-pointer"
          />
          <FontAwesomeIcon icon={faHeart} className="text-[grey] text-[23px] cursor-pointer" />
        </div>
      </div>

      <p className="font-[400] mt-2 text-center">{product.title}</p>
      <p className="text-[#a5a7aa] text-[13px]">{product.price}</p>
    </div>
  );
}

export default Products;
