import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Box, IconButton } from "@chakra-ui/react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navBody relative w-full bg-[#B3D6D0] py-[40px] px-[60px] ">
      <div className="container">
        <div className="flex  justify-between">
          <div className="col-lg-2">
            <Link to={"/"}>
              <img src={Logo} alt="company" />
            </Link>
          </div>
          <div className="col-lg-8 menu-hidden">
            <div className="flex px-[40px] justify-between flex-col items-end w-full gap-[20px]">
              <ul className="flex w-full justify-between items-center">
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase ">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase">
                  <Link to="/about">About us</Link>
                </li>
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px]  font-[600] uppercase">
                  <Link to="/services">Services</Link>
                </li>
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase">
                  Shop
                </li>
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase">
                  Blog
                </li>
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase">
                  Contact
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-white text-[18px] hover:text-[black] transition-all duration-700"
                  />
                </li>
              </ul>
              <form className="flex">
                <input
                  type="text"
                  className="rounded-l-[10px] rounded-bl-[10px] p-[10px] h-[50px] w-[250px]"
                  placeholder="Search..."
                />
                <div className="bg-black hover:bg-[#9AD6CC] transition-all duration-500 px-[20px] rounded-r-[10px] rounded-br-[10px] flex items-center">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-white "
                  />
                </div>
              </form>
            </div>
          </div>
          {/* //toggle menu */}
          <div className=" xl:hidden lg:hidden text-end">
            <IconButton
              aria-label="Toggle menu"
              icon={<FontAwesomeIcon icon={faBars} />}
              variant="outline"
              className="bg-white"
              onClick={toggleMenu}
            />
            {isOpen && (
              <Box className="lg:hidden absolute top-[100px] left-0 right-0 bg-[#B3D6D0] z-[999999]">
                <ul className="flex flex-col items-center">
                  <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase py-2">
                    <Link to="/" onClick={toggleMenu}>
                      Home
                    </Link>
                  </li>
                  <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase py-2">
                    <Link to="/about" onClick={toggleMenu}>
                      About us
                    </Link>
                  </li>
                  <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase py-2">
                    Services
                  </li>
                  <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase py-2">
                    Shop
                  </li>
                  <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase py-2">
                    Blog
                  </li>
                  <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase py-2">
                    Contact
                  </li>
                  <li className="py-2">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="text-white text-[18px] hover:text-[black] transition-all duration-700"
                    />
                  </li>
                </ul>
              </Box>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
