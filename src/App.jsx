import React from "react";
import Home from "./User/pages/home/home";
import { Route, Routes } from "react-router-dom";
import Layout from "./User/layout/layout";
import ScrollToTop from "./providers/scrollToTop/scroll";
import About from "./User/pages/about/about";
import Services from "./User/pages/services/services";
import Contact from "./User/pages/contact/contact";
import Blog from "./User/pages/blog/blog";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
