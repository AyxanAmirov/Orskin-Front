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
        <div className="flex flex-col  gap-[20px]">
          <div className="flex flex-wrap justify-between text-center items-center">
            <ul className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 flex xl:flex-nowrap lg:flex-nowrap flex-wrap  xl:gap-[20px] lg:gap-[20px] text-[#fff]">
              <li className=" xl:w-[max-content] lg:w-[max-content] md:w-full sm:w-full w-full  uppercase xl:py-0 lg:py-0 md:py-[20px] sm:py-[20px] py-[20px] xl:hover:bg-transparent lg:hover:bg-transparent md:hover:bg-white sm:hover:bg-white hover:bg-white xl:hover:text-[white] lg:hover:text-[white] md:hover:text-[#AAD7D2] sm:hover:text-[#AAD7D2] hover:text-[#AAD7D2] duration-[.4s] xl:border-none lg:border-none md:border-b-[1px] sm:border-b-[1px] border-b-[1px] border-[#999999]0">
                <Link
                  to={"/"}
                  className="hover:text-[black] duration-[.3s] xl:text-[18px] lg:text-[18px] md:text-[16px] text-[16px]"
                >
                  Home
                </Link>
              </li>

              <li className=" xl:w-[max-content] lg:w-[max-content] md:w-full sm:w-full w-full  uppercase xl:py-0 lg:py-0 md:py-[20px] sm:py-[20px] py-[20px] xl:hover:bg-transparent lg:hover:bg-transparent md:hover:bg-white sm:hover:bg-white hover:bg-white xl:hover:text-[white] lg:hover:text-[white] md:hover:text-[#AAD7D2] sm:hover:text-[#AAD7D2] hover:text-[#AAD7D2] duration-[.4s] xl:border-none lg:border-none md:border-b-[1px] sm:border-b-[1px] border-b-[1px] border-[#999999]0">
                <Link
                  to={"/contact"}
                  className="hover:text-[black] duration-[.3s] xl:text-[18px] lg:text-[18px] md:text-[16px] text-[16px]"
                >
                  CONTACT
                </Link>
              </li>

              <li className=" xl:w-[max-content] lg:w-[max-content] md:w-full sm:w-full w-full  uppercase xl:py-0 lg:py-0 md:py-[20px] sm:py-[20px] py-[20px] xl:hover:bg-transparent lg:hover:bg-transparent md:hover:bg-white sm:hover:bg-white hover:bg-white xl:hover:text-[white] lg:hover:text-[white] md:hover:text-[#AAD7D2] sm:hover:text-[#AAD7D2] hover:text-[#AAD7D2] duration-[.4s] xl:border-none lg:border-none md:border-b-[1px] sm:border-b-[1px] border-b-[1px] border-[#999999]0">
                <Link
                  to={"/terms-and-policy"}
                  className="hover:text-[black] duration-[.3s]  xl:text-[18px] lg:text-[18px] md:text-[16px] text-[16px]"
                >
                  TERMS AND CONDITIONS
                </Link>
              </li>
            </ul>
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
          <div className="flex gap-[20px] xl:justify-normal lg:justify-normal md:justify-center sm:justify-center justify-center">
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
