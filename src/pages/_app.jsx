import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import GlobalStyle from '../styles/global';
import { theme } from "../styles/theme";
import Navbar from '../components/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 600, offset: 120 })
  }, [])

  return (
    <ChakraProvider theme={theme} >
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
};

export default MyApp;