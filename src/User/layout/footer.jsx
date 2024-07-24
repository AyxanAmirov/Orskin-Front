import React from "react";
import { Link } from "react-router-dom";
import Visa from "../assets/icons/visa-svgrepo-com.svg";
import MasterCard from "../assets/icons/mastercard-full-svgrepo-com.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@chakra-ui/react";

function Footer() {
  return (
    <div className="bg-[#B3D6D0]">
      <div className="container py-[40px] ">
        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-between items-center">
            <div className="col-lg-5">
              <ul className="w-full flex gap-[20px]">
                <Link to="/">
                  <li className="text-white hover:text-[black] transition-all duration-700 text-[18px]  uppercase">
                    Home
                  </li>
                </Link>
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px]  uppercase">
                  CONTACT
                </li>
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px]  uppercase">
                  TERMS AND CONDITIONS
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <div className="flex gap-[20px]">
                <img src={Visa} alt="visa icon" className="w-[40px]" />
                <img
                  src={MasterCard}
                  alt="mastercard icon"
                  className="w-[40px]"
                />
                <img src={Visa} alt="visa icon" className="w-[40px]" />
              </div>
            </div>
            <div className="col-lg-3">
              <p className="text-white  text-[18px] font-[600] ">
                2023 Orskin. All right reserved.
              </p>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <Tooltip hasArrow label="Facebook" bg="black" color="#D3D3D3">
              <div className="py-[5px] px-[13px] bg-white rounded-[5px] hover:bg-[#F0F5F4] transition duration-[500]">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-[#B3D6D0]"
                />
              </div>
            </Tooltip>
            <Tooltip hasArrow label="Instagram" bg="black" color="#D3D3D3">
              <div className="py-[5px] px-[13px] bg-white rounded-[5px] hover:bg-[#F0F5F4] transition duration-[500]">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#B3D6D0]"
                />
              </div>
            </Tooltip>

            <Tooltip hasArrow label="Email" bg="black" color="#D3D3D3">
              <div className="py-[5px] px-[13px] bg-white rounded-[5px] hover:bg-[#F0F5F4] transition duration-[500]">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#B3D6D0]" />
              </div>
            </Tooltip>

            <Tooltip hasArrow label="Contact" bg="black" color="#D3D3D3">
              <div className="py-[5px] px-[13px] bg-white rounded-[5px] hover:bg-[#F0F5F4] transition duration-[500]">
                <FontAwesomeIcon icon={faPhone} className="text-[#B3D6D0]" />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
