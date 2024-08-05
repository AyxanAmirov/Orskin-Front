import React, { useState } from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import GoTop from "../components/goToTop/goTop";

function Layout() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className={isVisible&&"mb-[130px]"}>
        <Navbar setIsVisible={setIsVisible} isVisible={isVisible}/>
      </div>
      <Outlet />
      <GoTop />
      <Footer />
    </>
  );
}

export default Layout;
