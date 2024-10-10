import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import GoTop from "../components/goToTop/goTop";
import Whatsapp from "../components/whatsapp/whatsapp";
import { useDispatch, useSelector } from "react-redux";

function Layout() {

  const [lastScrollY, setLastScrollY] = useState(0);
  const dispacth = useDispatch()
  const isVisible = useSelector(state => state);

  useEffect(() => {
    window.onscroll = () => {

      if (window.pageYOffset > 160) {
        if (window.pageYOffset > 1) {
          setLastScrollY(window.pageYOffset)
        }
        if (window.pageYOffset > lastScrollY) {
          dispacth({
            type: "IS_VISIBLE"
          })
        } else {
          dispacth({
            type: "ANY"
          })
        }
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
