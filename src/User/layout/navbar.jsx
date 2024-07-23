import React from "react";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navBody relative w-full bg-[#B3D6D0] py-[40px] px-[60px]">
      <div className="container">
        <div className="flex justify-between">
          <div className="col-lg-2">
            <img src={Logo} alt="company" />
          </div>
          <div className="col-lg-8">
            <div className="flex justify-between flex-col items-end w-full gap-[20px]">
              <ul className="flex w-full justify-between items-center">
                <li className="text-white text-[18px] font-[600] uppercase ">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-white text-[18px] font-[600] uppercase">
                  <Link to="/about">About us</Link>
                </li>
                <li className="text-white text-[18px]  font-[600] uppercase">
                  Services
                </li>
                <li className="text-white text-[18px] font-[600] uppercase">
                  Shop
                </li>
                <li className="text-white text-[18px] font-[600] uppercase">
                  Blog
                </li>
                <li className="text-white text-[18px] font-[600] uppercase">
                  Contact
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-white text-[18px]"
                  />
                </li>
              </ul>
              <form className="flex">
                <input
                  type="text"
                  className="rounded-l-[10px] rounded-bl-[10px] p-[10px] h-[50px] w-[250px]"
                  placeholder="Search..."
                />
                <div className="bg-black px-[20px] rounded-r-[10px] rounded-br-[10px] flex items-center">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
