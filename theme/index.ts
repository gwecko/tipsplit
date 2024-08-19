import { extendTheme, FormControl } from "@chakra-ui/react";
import { color } from "framer-motion";

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
        backgroundColor: "blackAlpha.300",
        gap: 4,
        padding: 8,
        borderRadius: "16px",
      },
    },
  },
});

export default theme;
