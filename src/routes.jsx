import { createBrowserRouter } from "react-router-dom";
import Layout from "./User/layout/layout";
import Shop from "./User/pages/shop";
import NotFound from "./User/pages/notfound";
import Home from "./User/pages/home/home";
import About from "./User/pages/about/about";
import Contact from "./User/pages/contact/contact";
import Blog from "./User/pages/blog/blog";
import BlogDetail from "./User/pages/blogDetail/blogDetail";
import Search from "./User/pages/search/search";
import Terms from "./User/pages/terms/terms";
import TermOfUse from "./User/pages/termOfUse/termOfUse";
import Privacy from "./User/pages/privacy/privacy";
import Supply from "./User/pages/termsSupply/supply";
import Cookie from "./User/pages/cookiePolicy/cookie";
import ScrollToTop from "./providers/scrollToTop/scroll";
import Services from "./User/pages/services/services";
import ServiceLayout from "./User/layoutService/serviceLayout";
import LatestOffers from "./User/pages/lstestService/latestOffers";
import ServiceLaser from "./User/pages/serviceLaser/serviceLaser";
import Slimming from "./User/pages/ServiceSlimming/slimming";
import Aesthetics from "./User/pages/serviceAesthetics/aesthetics";
import Facials from "./User/pages/servicesFacials/facials";
import Wellness from "./User/pages/serviceWellness/wellness";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <ScrollToTop>
      <Layout />
    </ScrollToTop>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about-us",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "services/latest",
        element: <LatestOffers />
      },
      {
        path: "services",
        element: <ServiceLayout />,
        children: [
          {
            path: "laser",
            element: <ServiceLaser />
          },
          {
            path: "slimming",
            element: <Slimming />
          },
          {
            path: "aesthetics",
            element: <Aesthetics />
          },
          {
            path: "facials",
            element: <Facials />
          },
          {
            path: "wellness",
            element: <Wellness />
          },

        ]
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "blog/:slug",
        element: <BlogDetail />
      },
      {
        path: "search/:query",
        element: <Search />
      },
      {
        path: "terms-and-policy",
        element: <Terms />
      },
      {
        path: "term-of-use",
        element: <TermOfUse />
      },
      {
        path: "privacy-policy",
        element: <Privacy />
      },
      {
        path: "terms-supply",
        element: <Supply />
      },
      {
        path: "cookie-policy",
        element: <Cookie />
      }
    ]
  },
  {
    path: "shop",
    element: <Shop />
  },
  {
    path: "*",
    element: <NotFound />
  }
])