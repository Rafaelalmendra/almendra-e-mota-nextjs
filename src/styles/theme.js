import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
      }
    }
  },
  colors: {
    backgroundWhite: "#FDFDFD",
    white: "#FFFFFF",
    black: "#101014",
    gray: "#D3D3D3",
    green: "#308C7E",
  }
});