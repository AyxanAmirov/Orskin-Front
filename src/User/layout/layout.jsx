import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import GoTop from "../components/goToTop/goTop";
import Whatsapp from "../components/whatsapp/whatsapp";

function Layout() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setLastScrollY(window.pageYOffset - 1)
      console.log(window.pageYOffset);
      if (window.pageYOffset > lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  }, [window.scrollY]);

  return (
    <>
      <div className={isVisible ? "mb-[176px]" : "lg:mb-[155px] mb-[115px]"}>
        <Navbar isVisible={isVisible} />
      </div>
      <Outlet />
      <GoTop />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Layout;
