import { ChakraProvider } from "@chakra-ui/react"

import GlobalStyle from '../styles/global';
import { theme } from "../styles/theme";
import Navbar from '../components/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} >
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
    
}

export default MyApp;