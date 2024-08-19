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
      setLastScrollY(window.scrollY - 1)
      if (window.scrollY > lastScrollY) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    };
  }, [window, scrollY]);

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
