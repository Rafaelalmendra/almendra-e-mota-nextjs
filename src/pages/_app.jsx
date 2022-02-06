import Script from "next/script";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Aos from 'aos';

import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { theme } from "../styles/theme";
import GlobalStyle from '../styles/global';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollToTop from "../components/ScrollToTop";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 600, offset: 120 })
  }, [])

  return (
    <>
      <>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=UA-219615209-2`}
        />

        <Script id="tag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-219615209-2', {
              page_path: window.location.pathname,
            });
                `}
        </Script>
      </>
      <ChakraProvider theme={theme} >
        <GlobalStyle />
        <Navbar />
        <ScrollToTop />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
  </>
  )
};

export default MyApp;