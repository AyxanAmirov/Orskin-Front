import React from "react";
import Home from "./User/pages/home/home";
import { Route, Routes } from "react-router-dom";
import Layout from "./User/layout/layout";
import ScrollToTop from "./providers/scrollToTop/scroll";
import About from "./User/pages/about/about";
import Services from "./User/pages/services/services";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
