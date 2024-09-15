import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Box: {
      baseStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    Container: {
      baseStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "blackAlpha.300",
        gap: 2, // between child elements
        padding: 8, // of the box
        borderRadius: "16px",
      },
    },
  },
});

export default theme;
