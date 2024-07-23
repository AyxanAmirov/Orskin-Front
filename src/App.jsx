import React from "react";
import Home from "./User/pages/home/home";
import { Route, Routes } from "react-router-dom";
import Layout from "./User/layout/layout";
import ScrollToTop from "./providers/scrollToTop/scroll";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
