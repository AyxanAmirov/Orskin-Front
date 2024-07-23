import React from "react";
import Logo from "../assets/images/logo.png";
function Navbar() {
  return (
    <div className="w-full bg-[#B3D6D0] p-[30px]">
      <div className="container">
        <div className="flex justify-between">
          <div className="col-lg-2">
            <img src={Logo} alt="company" />
          </div>
          <div className="col-lg-8">
            <div className="flex justify-between flex-col items-end w-full">
              <ul className="flex w-full justify-between ">
                <li>Home</li>
                <li>About us </li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
