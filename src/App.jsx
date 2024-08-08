import React from "react";
import Home from "./User/pages/home/home";
import { Route, Routes } from "react-router-dom";
import Layout from "./User/layout/layout";
import ScrollToTop from "./providers/scrollToTop/scroll";
import About from "./User/pages/about/about";
import Services from "./User/pages/services/services";
import Contact from "./User/pages/contact/contact";
import Blog from "./User/pages/blog/blog";
import Shop from "./User/pages/shop/shop";
import Cart from "./User/pages/cart/cart";
import ProductDetails from "./User/pages/details/productDetails";
import ServiceLayout from "./User/layoutService/serviceLayout";
import ServiceLaser from "./User/pages/serviceLaser/serviceLaser";

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
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="/services/laser" element={<ServiceLayout/>}>
             <Route index element={<ServiceLaser/>}/>
          </Route>
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
