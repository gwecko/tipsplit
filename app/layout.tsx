import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import { Box } from "@chakra-ui/react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "TipSplit",
  description: "TipSplit gets you and your money home sooner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <Header />
          <main>
            <Box bg={"green.900"}>{children}</Box>
          </main>
        </body>
      </Providers>
    </html>
  );
}
