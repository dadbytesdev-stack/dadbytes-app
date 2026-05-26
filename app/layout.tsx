import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dad Bytes | Simple, Useful Apps",
  description:
    "Apps built by a dad, for everyone. From daily affirmations to recipe extraction — tools that actually help.",
  metadataBase: new URL("https://www.dadbytes.app"),
  openGraph: {
    siteName: "Dad Bytes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${d