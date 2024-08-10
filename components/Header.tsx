import { Box, Link, Container } from "@chakra-ui/react";
import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";

export default function Header() {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      bg={"green.600"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={4}
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
