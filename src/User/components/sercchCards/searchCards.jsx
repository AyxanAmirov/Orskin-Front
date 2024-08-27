import {
  faCartShopping,
  faChevronRight,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function SearchCards() {
  return (
    <div className="border-solid border-[1px] border-[#F2F3F5]">
      <div className="card relative border-b-solid border-b-[1px] border-b-[#F2F3F5] ">
        <img
          src="https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp"
          alt="product"
          className="w-full"
        />

        <div className="overlay absolute  inset-0 bg-[#B3D6D0] "></div>
        <div className="icons absolute right-[30px] top-[20px] flex flex-col gap-[14px] ">
          <Link to="/details">
            <FontAwesomeIcon
              icon={faEye}
              className="text-[#ffff] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] cursor-pointer hover:text-[#9AD6CC] duration-[.3s]"
            />
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-[#ffff] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] cursor-pointer hover:text-[#9AD6CC] duration-[.3s]"
            />
          </Link>
          <FontAwesomeIcon
            icon={faHeart}
            className="text-[#ffff] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] cursor-pointer hover:text-[#9AD6CC] duration-[.3s]"
          />
        </div>
      </div>
      <div className="p-[25px]">
            <Link className="text-[20px] text-[#9AD6CC]">Epicuren – Pumpkin Apple Spice Peel</Link>
            <p className="text-[20px] mt-[20px]">Protein Mist Enzyme Toner is an enzyme protein toner that restores the skin’s pH, while hydrating and refreshing the skin. When used throughout the da</p>
            <button className="text-[20px] text-[#9AD6CC]">Read More</button> <FontAwesomeIcon icon={faChevronRight} className="text-[14px] text-[#9AD6CC]" />

      </div>
    </div>
  );
}

export default SearchCards;
