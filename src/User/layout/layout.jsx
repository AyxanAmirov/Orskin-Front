import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import GoTop from "../components/goToTop/goTop";
import Whatsapp from "../components/whatsapp/whatsapp";

function Layout() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY) {
  //       setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   window.onscroll = handleScroll;

  //   return () => {
  //     window.onscroll = null;
  //   };
  // }, [lastScrollY]);

  return (
    <>
      <div className={isVisible ? "mb-[176px]" : "mb-[100px]"}>
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
