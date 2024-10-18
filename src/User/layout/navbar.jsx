import React, { useState } from "react";
import Logo from "../assets/image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Box, IconButton } from "@chakra-ui/react";
import SearchForm from "../components/searchForm";

function Navbar({ isVisible }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className={`navBody fixed top-0 z-[999999] w-full bg-[#B3D6D0] py-[30px] px-[20px] sm:px-[60px] transition-transform duration-500 ${isVisible ? 'nav-none' : 'nav-block'}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="col-lg-2">
            <Link to={"/"}>
              <img
                src={Logo}
                alt="company"
                className="sm:w-[120px] w-[120px] xl:w-full lg:w-full md:w-full"
              />
            </Link>
          </div>
          <div className="col-lg-8 menu-hidden">
            <div className="flex px-[40px] justify-between flex-col items-end w-full gap-[20px]">
              <ul className="flex w-full justify-between items-center">
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase">
                  <Link to="/about">About us</Link>
                </li>
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase">
                  <Link to="/services">Services</Link>
                </li>
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase">
                  <a href="https://shop.orskin.ae/" target="_blank">Shop</a>
                </li>


              </ul>
              <SearchForm />
            </div>
          </div>
          {/* //toggle menu */}
          <div className="xl:hidden lg:hidden text-end ">
            <IconButton
              aria-label="Toggle menu"
              icon={<FontAwesomeIcon icon={faBars} />}
              variant="outline"
              className="bg-white"
              onClick={toggleMenu}
            />
            {isOpen && (
              <Box className="lg:hidden md:top-[130px] absolute pb-[30px] top-[100px] left-0 right-0 bg-[#B3D6D0] z-[999999]">
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
                    <Link to="/services" onClick={toggleMenu}>Services</Link>
                  </li>
                  <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase py-2">
                    <a href="https://shop.orskin.ae/" target="_blank">Shop</a>
                  </li>
                  <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase py-2">
                    <Link to="/blog" onClick={toggleMenu}>Blog</Link>
                  </li>
                  <li className="text-white hover:text-[black] transition-all duration-700 text-[18px] font-[600] uppercase py-2">
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                  </li>
                  {/* <li className="py-2">
                    <Link to="/cart">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="text-white text-[18px] hover:text-[black] transition-all duration-700"
                      />
                    </Link>
                  </li> */}
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
