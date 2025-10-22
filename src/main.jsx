import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Provider } from "react-redux";
import { globalStore } from "./redux/store.jsx";
import { HelmetProvider } from "react-helmet-async";
import { routers } from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <HelmetProvider>
      <Provider store={globalStore}>
        <RouterProvider router={routers} />
      </Provider>
    </HelmetProvider>
  </ChakraProvider>
);

AOS.init({
  // offset: 2000,
  duration: 1000,
  easing: "ease-in-out",
  mirror: false,
});
