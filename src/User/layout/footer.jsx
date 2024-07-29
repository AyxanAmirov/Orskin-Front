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
        <div className="flex flex-col items-center gap-[20px]">
          <div className="flex flex-wrap justify-between text-center items-center">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <ul className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xl:gap-[20px] lg:gap-[20px]">
                <Link
                  to="/"
                  className="flex justify-center  xl:py-[0] lg:py-[0] md:border-bottom-footer sm:border-bottom-footer border-bottom-footer lg:border-none xl:border-none  md:py-[20px] sm:py-[20px] py-[20px] md:hover:bg-white sm:hover:bg-white hover:bg-white xl:hover:bg-transparent lg:hover:bg-transparent duration-[.4s]"
                >
                  <li className="text-white  md:hover:text-[black] sm:hover:text-[black] hover:text-[black] xl:hover:text-[white] lg:hover:text-[white] transition-all duration-700  xl:text-[18px] lg:text-[18px] md:text-[16px] text-[16px] uppercase w-fit">
                    Home
                  </li>
                </Link>
                <Link
                  to=""
                  className="flex justify-center xl:py-[0] lg:py-[0] sm:border-bottom-footer border-bottom-footer lg:border-none xl:border-none  md:py-[20px] sm:py-[20px] py-[20px] md:hover:bg-white sm:hover:bg-white hover:bg-white xl:hover:bg-transparent lg:hover:bg-transparent duration-[.4s]"
                >
                  <li className="text-white  hover:text-[black] xl:hover:text-[white]  transition-all duration-700  xl:text-[18px] lg:text-[18px] md:text-[16px] text-[16px] uppercase w-fit">
                    CONTACT
                  </li>
                </Link>
                <Link
                  to=""
                  className="flex justify-center sm:border-bottom-footer border-bottom-footer lg:border-none xl:border-none  xl:py-[0] lg:py-[0] md:py-[20px] sm:py-[20px] py-[20px] md:hover:bg-white sm:hover:bg-white hover:bg-white xl:hover:bg-transparent lg:hover:bg-transparent duration-[.4s]"
                >
                  <li className="text-white md:hover:text-[black] sm:hover:text-[black] hover:text-[black] xl:hover:text-[white] lg:hover:text-[white] transition-all duration-700  text-[18px] uppercase w-fit">
                    TERMS AND CONDITIONS
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12 col-12">
              <div className="flex gap-[20px] justify-center">
                <img
                  src={Visa}
                  alt="visa icon"
                  className="xl:w-[40px] lg:w-[40px] md:w-[80px] sm:w-[80px] w-[80px]"
                />
                <img
                  src={MasterCard}
                  alt="mastercard icon"
                  className="md:w-[80px] sm:w-[80px] w-[80px] xl:w-[40px] lg:w-[40px]"
                />
                <img
                  src={Visa}
                  alt="visa icon"
                  className="xl:w-[40px] lg:w-[40px] md:w-[80px] sm:w-[80px] w-[80px]"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <p className="text-white  xl:text-[18px] lg:text-[18px] md:text-[16px] text-[16px] font-[600] ">
                2023 Orskin. All right reserved.
              </p>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <Tooltip hasArrow label="Facebook" bg="black" color="#D3D3D3">
              <div className="py-[5px] px-[13px] :xl:text-[16px] lg:text-[16px] md:text-[14px] text-[14px] bg-white rounded-[5px] hover:bg-[#F0F5F4] transition duration-[500]">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-[#B3D6D0]"
                />
              </div>
            </Tooltip>
            <Tooltip hasArrow label="Instagram" bg="black" color="#D3D3D3">
              <div className="py-[5px] px-[13px] :xl:text-[16px] lg:text-[16px] md:text-[14px] text-[14px] bg-white rounded-[5px] hover:bg-[#F0F5F4] transition duration-[500]">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#B3D6D0]"
                />
              </div>
            </Tooltip>

            <Tooltip hasArrow label="Email" bg="black" color="#D3D3D3">
              <div className="py-[5px] px-[13px] :xl:text-[16px] lg:text-[16px] md:text-[14px] text-[14px] bg-white rounded-[5px] hover:bg-[#F0F5F4] transition duration-[500]">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#B3D6D0]" />
              </div>
            </Tooltip>

            <Tooltip hasArrow label="Contact" bg="black" color="#D3D3D3">
              <div className="py-[5px] px-[13px] :xl:text-[16px] lg:text-[16px] md:text-[14px] text-[14px]  bg-white rounded-[5px] hover:bg-[#F0F5F4] transition duration-[500]">
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
