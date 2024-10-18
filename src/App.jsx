import React from "react";
import Home from "./User/pages/home/home";
import { Route, Routes } from "react-router-dom";
import Layout from "./User/layout/layout";
import ScrollToTop from "./providers/scrollToTop/scroll";
import About from "./User/pages/about/about";
import Services from "./User/pages/services/services";
import Contact from "./User/pages/contact/contact";
import Blog from "./User/pages/blog/blog";
import ServiceLayout from "./User/layoutService/serviceLayout";
import ServiceLaser from "./User/pages/serviceLaser/serviceLaser";
import Slimming from "./User/pages/ServiceSlimming/slimming";
import Aesthetics from "./User/pages/serviceAesthetics/aesthetics";
import Facials from "./User/pages/servicesFacials/facials";
import Wellness from "./User/pages/serviceWellness/wellness";
import LatestOffers from "./User/pages/lstestService/latestOffers";
import Terms from "./User/pages/terms/terms";
import TermOfUse from "./User/pages/termOfUse/termOfUse";
import Privacy from "./User/pages/privacy/privacy";
import Supply from "./User/pages/termsSupply/supply";
import Cookie from "./User/pages/cookiePolicy/cookie";
import BlogDetail from "./User/pages/blogDetail/blogDetail";
import Search from "./User/pages/search/search";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/terms-and-policy" element={<Terms />} />
          <Route path="/term-of-use" element={<TermOfUse />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-supply" element={<Supply />} />
          <Route path="/cookie-policy" element={<Cookie />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services" element={<ServiceLayout />}>
            <Route path="laser" element={<ServiceLaser />} />
            <Route path="slimming" element={<Slimming />} />
            <Route path="aesthetics" element={<Aesthetics />} />
            <Route path="facials" element={<Facials />} />
            <Route path="wellness" element={<Wellness />} />
          </Route>
          <Route path="services/latest" element={<LatestOffers />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
