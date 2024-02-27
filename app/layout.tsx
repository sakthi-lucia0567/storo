import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LoadPreline from "./components/LoadPreline";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AniMart",
  description:
    "AniMart is a platform for selling anime merchandise, with a focus on quality and also we provide open source headless ecommerce solution for anime fans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <LoadPreline />
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
