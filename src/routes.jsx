import { createBrowserRouter } from "react-router-dom";

import Shop from "./pages/shop";
import NotFound from "./pages/notfound";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Blog from "./pages/blog/blog";
import BlogDetail from "./pages/blogDetail/blogDetail";
import Search from "./pages/search/search";
import Terms from "./pages/terms/terms";
import TermOfUse from "./pages/termOfUse/termOfUse";
import Privacy from "./pages/privacy/privacy";
import Supply from "./pages/termsSupply/supply";
import Cookie from "./pages/cookiePolicy/cookie";
import ScrollToTop from "./providers/scrollToTop/scroll";
import Services from "./pages/services/services";
import ServiceLayout from "./layout/service/serviceLayout";
import LatestOffers from "./pages/lstestService/latestOffers";
import ServiceLaser from "./pages/serviceLaser/serviceLaser";
import Slimming from "./pages/ServiceSlimming/slimming";
import Aesthetics from "./pages/serviceAesthetics/aesthetics";
import Facials from "./pages/servicesFacials/facials";
import Wellness from "./pages/serviceWellness/wellness";
import ConsultationForm from "./pages/consultation";
import Layout from "./layout/user";
import AdminLayout from "./layout/admin";
import Login from "./pages/login";

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
    path: "/orskin-lab",
    element: <AdminLayout />,
    children: []
  },
  {
    path: "/room",
    element: <Login />
  },
  {
    path: "shop",
    element: <Shop />
  },
  {
    path: "consultation",
    element: <ConsultationForm />
  },
  {
    path: "*",
    element: <NotFound />
  }
])