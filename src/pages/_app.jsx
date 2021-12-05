import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

import GlobalStyle from '../styles/global';
import { theme } from "../styles/theme";
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollToTop from "../components/ScrollToTop";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 600, offset: 120 })
  }, [])

  return (
    <ChakraProvider theme={theme} >
      <GlobalStyle />
      <Navbar />
      <ScrollToTop />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
};

export default MyApp;