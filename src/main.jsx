import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Provider } from "react-redux";
import { globalStore } from "./redux/store.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <HelmetProvider>
        <Provider store={globalStore}>
          <App />
        </Provider>
      </HelmetProvider>
    </ChakraProvider>
  </BrowserRouter>
);

AOS.init({
  // offset: 2000,
  duration: 1000,
  easing: "ease-in-out",
  mirror: false,
});
