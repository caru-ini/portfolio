import { Inter } from "next/font/google";

import LocalFont from "next/font/local";

export const poppins = LocalFont({
  src: [
    {
      path: "./font-files/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const mPlus1p = LocalFont({
  src: [
    {
      path: "./font-files/MPLUS1p-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font-files/MPLUS1p-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mPlus1p",
  display: "swap",
});
