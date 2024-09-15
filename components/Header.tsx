import { Box, Link, Container } from "@chakra-ui/react";
import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";

export default function Header() {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      top={0}
      position={'sticky'}
      bg={"green.100"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={4}
      w={'100%'}
    >
      <Link
        href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
        target="_blank"
        rel="noreferrer"
      >
        <SupabaseLogo />
      </Link>
      <Link href="https://nextjs.org/" target="_blank" rel="noreferrer">
        <NextLogo />
      </Link>
    </Box>
  );
}
